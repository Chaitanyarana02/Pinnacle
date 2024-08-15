import { Toast } from "primereact/toast";
import { RefObject } from "react";
import { NotificationTypeEnum } from "../enums/notificationType.enum";

class UtilityService {
    // static BASE_URL = 'http://127.0.0.1:8080/';
    // static BASE_URL = 'http://18.134.39.56:3001/';
    static BASE_URL = 'https://api.pinnaqle.co.uk/';


    static getBaseUrl(): string {
        return UtilityService.BASE_URL;
    }

    static ShowNotification(toast:  RefObject<Toast>, messageType: NotificationTypeEnum, message: string) {
        const messages:{[key in NotificationTypeEnum]: () => void} = {
            showSuccess: () => {
            toast?.current?.show({severity:'success', summary: 'Success', detail:message, life: 3000});
        },
        showInfo : () => {
            toast?.current?.show({severity:'info', summary: 'Info', detail:message, life: 3000});
        },
        showWarn : () => {
            toast?.current?.show({severity:'warn', summary: 'Warning', detail:message, life: 3000});
        },
        showError : () => {
            toast?.current?.show({severity:'error', summary: 'Error', detail:message, life: 3000});
        },
        }

        if(messages[messageType]) {
            messages[messageType]();
        }

    }
}

export default UtilityService;