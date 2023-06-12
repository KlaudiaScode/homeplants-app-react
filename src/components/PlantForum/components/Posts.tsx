import React from "react";
import member from "../../../img/member.jpg";
import Avatar from "@mui/material/Avatar";
import { Link, Typography } from "@mui/material";
import monstera from "../../../img/monsterad.jpg"

export default function Posts(){
    return (
        <div className="display_category">
            <div className="posts">
                <div className="post">
                    <div>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 56, height: 56 }}
                        />
                        <Link href="#"><Typography>Robert Kot</Typography></Link>
                    </div>
                    <div>
                        <Typography>
                            Hej.
                            Czy z liscia monstery której oczko zostalo wykorzystane  wyrośnie coś jeszcze? Czy komuś się to kiedyś udało?
                        </Typography>
                    </div>
                    <img src={monstera} />
                </div>
                <div className="post">
                    <div>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 56, height: 56 }}
                        />
                        <Link href="#"><Typography>Robert Kot</Typography></Link>
                    </div>
                    <div>
                        <Typography>
                            Hej.
                            Czy z liscia monstery której oczko zostalo wykorzystane  wyrośnie coś jeszcze? Czy komuś się to kiedyś udało?
                        </Typography>
                    </div>
                    <img src={monstera} />
                </div>
            </div>
        </div>
    )
}