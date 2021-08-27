import { reactive } from 'vue';
import axios from 'axios'
let emails = reactive(new Set())
export const selectedEmails = function() {
    const toggle = (email) => {
        return emails.has(email) ? emails.delete(email) : emails.add(email)
    };
    let clear = () => {
        emails.clear()
    }

    let addMultiple = (newEmails) => {
        newEmails.forEach((email) => {
            emails.add(email)
        })
    }

    const forSelectedAction = (func) => {
        emails.forEach(email => {
            func(email)
            axios.put(`http://localhost:3000/emails/${email.id}`, email)
        })
    }

    const markRead = () => forSelectedAction(e => e.read = true )
    const markUnread = () => forSelectedAction(e => e.read = false )
    const archive = () => { forSelectedAction(e => e.archived = true); clear()}
    
    return {
        emails,
        toggle,
        addMultiple,
        clear,
        markRead,
        markUnread,
        archive
    };
}

export default selectedEmails;