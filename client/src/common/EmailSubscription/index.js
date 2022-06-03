import React from "react";
const EmailSubscription = () => {
    return(
        <div>
            <form action="#" method="post">
                <fieldset>
                    <legend>Newsletter:</legend>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <button type="submit" value="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}
export default EmailSubscription;