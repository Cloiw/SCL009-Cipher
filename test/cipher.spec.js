describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof window.cipher, 'object');
  });

  describe('cipher.encode', () => {

    
    it('debería ser una función', () => {
      assert.equal(typeof window.cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{
      assert.equal(window.cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () =>{
      assert.equal(window.cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });
    it('debería retornar "Taxm Ygzpa." para "Hola Mundo." con offset 12', () =>{
      assert.equal(window.cipher.encode(12,"Hola Mundo."),"Taxm Ygzpa.");
    });
    
  });

describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof window.cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() =>{
    assert.equal(window.cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () =>{
      assert.equal(window.cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    });

});})
