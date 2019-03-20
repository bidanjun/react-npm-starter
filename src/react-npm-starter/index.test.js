import hello from './index'

describe('npm', () => {
  it('should return hello npm', () => {
    const result=hello();
    
    expect(result).toBe('hello npm!')
  });
})