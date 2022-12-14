import '../scss/main.scss';
import {meuEstilo} from './exercicios/Style';
import {fetchNotebook as TypesInterfaces} from './exercicios/TypesInterfaces';
import {fetchCursos as Arrays} from './exercicios/Arrays';
import {replaceLinks as Instanceof} from './exercicios/Instanceof';
import {modifyNodeList as InterfacesDOM} from './exercicios/InterfacesDOM';
import {eventosCallback as EventosCallback} from './exercicios/EventosCallback';
import {arredondaCeil as Functions} from './exercicios/Functions';
import {fetchCursos as UserTypeGuard} from './exercicios/UserTypeGuard';
import {Exercise} from './exercicios/Exercicio01';
import {fetchVendas as Tuples} from './exercicios/Tuples';
import {handleData as Keyof} from './exercicios/Keyof';
import dadosPratica from './pratica/Dados';
import domPratica from './pratica/Dom';

meuEstilo();

//0204 Types e Interfaces
TypesInterfaces();

//0205 Arrays
Arrays();

//0301 Instanceof
Instanceof();

//0302 Interfaces do DOM
InterfacesDOM();

//0303 Eventos e Callback
EventosCallback();

//0305 Functions
Functions(30);

//0308 User Type Guard
UserTypeGuard();

//0312 Exercicio 1
Exercise();

//0402 Tuples
Tuples();

//0403 Keyof
Keyof();

//06 Pratica de dados
dadosPratica();

//07 Pratica de DOM
domPratica();
