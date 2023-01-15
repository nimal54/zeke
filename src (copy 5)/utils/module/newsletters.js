import React from "react";
import "../../style/utils/newsletter.style.css"

const Newsletters = () => {
    return (
        <center>
            <h1 className="maintitle_newsletter">Newsletter!</h1>

            <section class="newsletter">
                <div class="newsText">
                    <h1>Join our newsletter!!!</h1>
                    <p>Subscribe to our weekly newsletter and stay tunned.
                    </p>
                    <img src="https://images2.imgbox.com/22/73/1f6acDGg_o.png" />
                </div>
                <div class="newsSign">
                    <form>

                        <div class="input-field">
                            <label for="exampleInputName">Name</label> <br />
                            <input class="input_feild" type="text" name="name" />
                        </div>

                        <div class="input-field">
                            <label for="exampleInputEmail">E-mail</label><br />
                            <input class="input_feild" type="text" name="email" />
                        </div>

                        <button className="btn_submit" type="submit" name="submit">sign</button>

                    </form>
                </div>
            </section>
        </center>
    )
}

export default Newsletters;