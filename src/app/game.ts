export class Game {

    private _score: number = 0;

    public roll(pins: number): void {
        this._score += pins;
    }

    public score(): number {
        return this._score;
    }
}
