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
      <TiltCard className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 p-6 backdrop-blur transition-all duration-500 hover:border-blue-500/50 hover:from-blue-500/10 hover:to-purple-500/10 hover:shadow-2xl hover:shadow-blue-500/20">
        <div className="relative">
          <div className="mb-4 animate-bounce-slow text-4xl">{icon}</div>
          <h3 className="mb-2 text-lg font-semibold text-white">{name}</h3>
          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 animate-shimmer"
              style={{ width: isVisible ? `${level}%` : '0%' }}
            />
          </div>
        </div>
      </TiltCard>
    </div>
  )
}
