import { error } from "console";
import { fetchUserPlants } from "../fetchUserPlants";


const localStorageMock = (function () {
  let store: Record<string, string> = {}

  return {
    setItem: function (key: string, value: string) {
      store[key] = value.toString()
    },
    getItem: function (key: string) {
      return store[key] || null
    }
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

describe('fetchUserPlants', () => {
  const spyLocalStorageGetItem = jest.spyOn(localStorage, 'getItem');
  it('should return empty array', async () => {
    spyLocalStorageGetItem.mockReturnValueOnce(null);
    const result = fetchUserPlants();
    expect(result).toEqual([]);
   
    expect(spyLocalStorageGetItem).toHaveBeenCalled();
    expect(spyLocalStorageGetItem).toHaveBeenCalledTimes(1);
  })
  
  it('should return an array with a string', async () => {
    spyLocalStorageGetItem.mockReturnValueOnce('["cat","dog","bee"]');
    const result = fetchUserPlants();
    expect(result).toEqual(['cat', 'dog', 'bee']);
  })

  it('should return error', async () => {
    spyLocalStorageGetItem.mockReturnValueOnce(error);
    const result = fetchUserPlants();
    expect(result).toEqual([]);
  })
})
