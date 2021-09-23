import { DevEnvironment } from "./dev.env";
import { ProdEnvironment } from "./prod.env"

export interface Environment{
    db_url: string
}
export function getEnvironmentVariable(){
    if(process.env.NODE_ENV == 'development'){
        return ProdEnvironment;
    }
    return DevEnvironment;
}