import React, { useRef }from "react";
import {
    Label,
    Button,
    Table,
} from "reactstrap";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        console.log('test')
        e.preventDefault();

        emailjs.sendForm('service_likemeTest', 'template_12kn6lv', form.current, 'j3kHSX7U7zSheMzxo')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        window.location.replace("/")
    };
  
    return (
        <div className="w-full min-h-[100vh] bg-white">
            <div className="my-auto h-full">
                <div className="font-bold pt-[25vh] my-auto">
                    <Label className="text-5xl">Contact Us</Label>
                </div>

                <div className="py-12 w-[40%] m-auto">
                    <form ref={form} onSubmit={sendEmail}>
                        <Table className="border border-[2px] border-black m-auto w-[100%]">
                            <tr className="border border-[2px] border-black">
                                <td className="border border-[2px] border-black">
                                    <input 
                                        className="w-full h-[40px] p-4"
                                        type="text" 
                                        name="user_name" 
                                        placeholder="이름"
                                    />
                                </td>
                            </tr>
                            <tr className="border border-[2px] border-black ">
                                <td colspan="2">
                                    <input 
                                        className="w-full h-[40px] p-4"
                                        type="email" 
                                        name="user_email" 
                                        placeholder="이메일"
                                    />
                                </td>
                            </tr>
                            <tr className="border border-[2px] border-black">
                                <td colspan="2">
                                    <input 
                                        className="w-full h-[40px] p-4"
                                        type="phone" 
                                        name="user_phone" 
                                        placeholder="전화번호"
                                    />
                                </td>
                            </tr>
                            <tr className="border border-[2px] border-black">
                                <td colspan="2">
                                    <input 
                                        className="w-full h-[40px] p-4"
                                        type="text" 
                                        name="area" 
                                        placeholder="지역"
                                    />
                                </td>
                            </tr>
                            <tr className="border border-[2px] border-black">
                                <td colspan="2">
                                    <textarea 
                                        className="w-full h-[10rem] p-4"
                                        name="message" 
                                        placeholder="Message"
                                    />
                                </td>
                            </tr>
                        </Table>
                        <input 
                            type="submit" 
                            value="Send" 
                            className="bg-[#93AEF9] w-[20%] h-[3rem] my-6 text-white text-[15px] font-bold rounded-lg cursor-pointer hover:text-white hover:bg-[#758BC7]"
                        />
                    </form>
                </div>
            </div>
            
            
            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}
        </div>
    );
};

export default Contact;