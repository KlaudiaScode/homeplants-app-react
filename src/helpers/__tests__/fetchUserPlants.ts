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
  it('should return empty array when there is no value assigned to the key in the localStorage', async () => {
    spyLocalStorageGetItem.mockReturnValueOnce(null);
    const result = fetchUserPlants();
    expect(result).toEqual([]);
   
    expect(spyLocalStorageGetItem).toHaveBeenCalled();
    expect(spyLocalStorageGetItem).toHaveBeenCalledTimes(1);
  })
  
  it('should return parsed array saved as JSON in the localStorage', async () => {
    spyLocalStorageGetItem.mockReturnValueOnce('["cat","dog","bee"]');
    const result = fetchUserPlants();
    expect(result).toEqual(['cat', 'dog', 'bee']);
  })

  it('should return empty array when in localStorage is saved wrong JSON', async () => {
    const wrongJson = 'abc' ;
    spyLocalStorageGetItem.mockReturnValueOnce(wrongJson);
    const result = fetchUserPlants();
    expect(result).toEqual([]);
  })
})
