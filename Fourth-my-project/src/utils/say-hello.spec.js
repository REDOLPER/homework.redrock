import { describe, it, expect, vi } from 'vitest';
import { sayHello } from "./say-hello";

describe('sayHello function', () => {
  it('should log "Hello, World!" to the console', () => {
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    sayHello();

    expect(consoleLogSpy).toHaveBeenCalledWith("Hello, World!");
    consoleLogSpy.mockRestore();
  });
});
