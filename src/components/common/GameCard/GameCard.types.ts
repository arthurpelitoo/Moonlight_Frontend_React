export type GameCardProps = {
  game: Game;
  onAddToCart?: () => void
  onBuy?: () => void
  actions?: React.ReactNode
}