import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('You recive a new notification');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a new notification content with less then 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a new notification content with more then 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
