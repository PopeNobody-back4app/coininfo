import { Parse } from './parse.js';
import '@copblock/json-rw';

Parse.serverURL='http://localhost:1337/parse';
Parse.initialize(
  'coininfo',
  'coininfo.masterKey',
  'coininfo.javascriptKey',
);
const Obj = Parse.Object;
const Chain = Obj.extend('chain');
const Explorer = Obj.extend('explorer');
const Derivation = Obj.extend('derivation');
const Info = Obj.extend('info');

const registry = JSON.read('registry.json');
for(let i=0;i<registry.length;i++) {
  let chain=registry[i];
  chain.sym=chain.id;
  delete chain.id;
  const explorer = new Explorer(chain.explorer);
  delete(chain.explorer);
  const info = new Info(chain.info);
  delete(chain.info);
  const ds = chain.derivation;
  delete chain.derivation;
  for(let j=0;j<ds.length;j++) {
    ds[j]=new Derivation(ds[j]);
  }
  chain=new Chain(chain);
  chain.set('explorer',explorer);
  chain.set('info',info);
 chain.set('derivation', ds);
  await chain.save();
}
