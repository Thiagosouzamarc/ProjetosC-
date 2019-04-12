//import { ConcessionariaDao } from './ConcessionariaDao'
//import { PessoaDao } from './PessoaDao'

//let dao2: PessoaDao = new PessoaDao()
//let dao: ConcessionariaDao = new ConcessionariaDao()

import Concessionaria from './Concessionaria'

import Pessoa from './Pessoa'
import { Dao } from './Dao';


let concessionaria = new Concessionaria('', []);
let pessoa: Pessoa = new Pessoa('', '');


let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();
dao3.inserir(concessionaria)