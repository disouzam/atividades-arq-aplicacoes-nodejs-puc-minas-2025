export interface BaseUseCase {
  execute(...args: unknown[]): Promise<unknown>;
}
