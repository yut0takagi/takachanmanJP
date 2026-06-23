import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { TiltCard } from './TiltCard'

interface SkillCardProps {
  name: string
  icon: string
  level?: number
  delay?: string
}

export function SkillCard({ name, icon, level = 80, delay = '' }: SkillCardProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={isVisible ? `animate-fade-in-up ${delay}` : 'opacity-0'}
    >
      <TiltCard className="ui-card ui-card-hover group relative overflow-hidden">
        <div className="relative">
          <div className="mb-4 animate-bounce-slow text-4xl">{icon}</div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">{name}</h3>
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-foreground transition-all duration-1000 animate-shimmer"
              style={{ width: isVisible ? `${level}%` : '0%' }}
            />
          </div>
        </div>
      </TiltCard>
    </div>
  )
}
