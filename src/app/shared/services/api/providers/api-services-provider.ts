import { importProvidersFrom } from "@angular/core";
import { ApiModule } from "../api.module";
import { Configuration, ConfigurationParameters } from "../configuration";
import { environment } from "../../../../../environments/environment";

function apiConfigFactory(): Configuration {
    //config döndürecek
    const params: ConfigurationParameters = {
        basePath: environment.apiUrl,//base path vermiş olduk sabit olmaması için
    };
    return new Configuration(params);

}
//app.config.ts dosyasında kullanıcaz
export function provideApiServices() {
    return importProvidersFrom(ApiModule.forRoot((apiConfigFactory)));
}