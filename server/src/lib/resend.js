import {Resend} from "resend";
import { ENV } from "./env.js";

export const resendClient = new Resend(ENV.ReSEND_API_KEY);

export const emailSender = {    
    email: ENV.EMAIL_FROM,
    name: ENV.EMAIL_FROM_NAME,
    };