const assert = require('chai').assert;
const app = require('../HardDiet/index.js');

describe('Hard Diet',()=>{
    it('test case 1',()=>{
       const chars = ['R','Y','G'];
       let str='';
       let count=0;
       for(let i1=0;i1<3;i1++)
           for(let i2=0;i2<3;i2++)
               for(let i3=0;i3<3;i3++)
                   for(let i4=0;i4<3;i4++)
                       for(let i5=0;i5<3;i5++){
                            str=chars[i1]+chars[i2]+chars[i3]+chars[i4]+chars[i5];
                            //console.log(++count,str,'=',app.doOperation(str));
                            assert.equal(app.doOperation(str),'rahat baash') ;
                       }
    });
});
