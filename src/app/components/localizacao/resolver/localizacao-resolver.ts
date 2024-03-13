import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Localizacao } from "../../../models/localizacao.model";
import { LocalizacaoService } from "../../../services/localizacao.service";
import { inject } from "@angular/core";

export const localizacaoResolver: ResolveFn<Localizacao> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
      return inject(LocalizacaoService).findById(route.paramMap.get('id')!);
    }
