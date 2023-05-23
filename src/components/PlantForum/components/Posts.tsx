import React from "react";
import member from "../../../img/member.jpg";

export default function Posts(){
    return (
        <div className="display_category">
            <div className="posts">
                <div className="post">
                    <div className="profil">
                        <img src={member}></img>
                        <label className="login">Joanna Bijak</label>
                    </div>
                    <span className="post_content">
                        Hej! 
                        Dlaczego moja monstera nie pęka? 
                        Wypuszcza co chwilę nowe liście, 
                        podłoże ma wilgotne ale nie przelane,
                        stoi na przeciwko okna dachowego,
                        stanowisko jasne ale światło rozproszone.
                    </span>
                </div>
            </div>
        </div>
    )
}