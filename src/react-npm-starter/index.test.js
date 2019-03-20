import hello from './index'

describe('npm', () => {
  it('should return hello npm', () => {
    const result=hello();
    console.log('result=',result)
    
    expect(result).toBe('hello npm!')
  });
})