import { AbstractControl } from "@angular/forms";

export function PasswordMatch(password: string, confirm: string) {
     return function(form: AbstractControl){
        const pass = form.get(password)?.value
        const conf = form.get(confirm)?.value
        
        if (pass === conf) {
            return null;
        }
        return {passwordMismatchError:true}
        
    }
}