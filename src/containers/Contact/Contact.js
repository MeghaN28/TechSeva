import React from 'react';
import "./contact.css"

function Contact() {
    return (
        //<div  style={{backgroundImage: `url(${img})` , backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundPosition:"center"}}>
        <div>
            <div id="content">
                <h1>Contact</h1>

                <form action=" " method="post" autocomplete="on">
                    <p>
                        <label for="username" class="icon-user"> Name
                <span class="required">*</span>
                        </label>
                        <input type="text" name="username" id="username" required="required" placeholder="Your Name" />
                    </p>

                    <p>
                        <label for="usermail" class="icon-envelope"> E-mail address
                <span class="required">*</span>
                        </label>
                        <input type="email" name="usermail" id="usermail" placeholder="I promise I hate spam too!" required="required" />
                    </p>

                    <p>
                        <label for="usersite" class="icon-link"> User ID
                        <span class="required">*</span></label>
                        <input type="url" name="usersite" id="usersite" placeholder="eg: FirstName.LastName" />
                    </p>

                    <p>
                        <label for="subject" class="icon-bullhorn"> Subject</label>
                        <input type="text" name="subject" id="subject" placeholder="What would you like to talk about?" />
                    </p>

                    <p>
                        <label for="message" class="icon-comment"> Message
                <span class="required">*</span>
                        </label>
                        <textarea placeholder="Your message here and I'll answer as soon as possible " required="required"></textarea>
                    </p>
                    <p class="indication">Fields with
            <span class="required"> * </span>are required</p>

                    <input type="submit" value=" Send this mail ! " />

                </form>
            </div>
        </div>
    );
}

export default Contact;

