import {
  Apple,
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  Dumbbell,
  TicketCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";

type Entity = {
  name: string;
  description: string;
  icon: LucideIcon;
};

const entities = {
  member: {
    name: "Member",
    description: "Represents a gym member and acts as the central relationship point for member activity.",
    icon: UserRound,
  },
  membership: {
    name: "Membership",
    description: "Tracks the member's active gym membership relationship.",
    icon: CreditCard,
  },
  workoutSession: {
    name: "WorkoutSession",
    description: "Represents a recorded training session performed by a member.",
    icon: Dumbbell,
  },
  exerciseLog: {
    name: "ExerciseLog",
    description: "Stores exercise-level workout activity recorded inside a workout session.",
    icon: ClipboardList,
  },
  nutritionPlan: {
    name: "NutritionPlan",
    description: "Represents nutrition planning associated with a member.",
    icon: Apple,
  },
  gymClass: {
    name: "GymClass",
    description: "Represents a scheduled class or gym event.",
    icon: CalendarDays,
  },
  classBooking: {
    name: "ClassBooking",
    description: "Connects members with the classes they reserve.",
    icon: TicketCheck,
  },
  checkIn: {
    name: "CheckIn",
    description: "Records member gym check-in activity.",
    icon: ClipboardCheck,
  },
} satisfies Record<string, Entity>;

function EntityCard({ entity, root = false }: { entity: Entity; root?: boolean }) {
  const Icon = entity.icon;

  return (
    <article className={`rounded-[7px] border p-4 transition-colors duration-200 hover:border-accent/50 ${root ? "border-accent/35 bg-[#0e1821]" : "border-white/[0.1] bg-[#0c141b]"}`}>
      <div className="flex items-start gap-3">
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-[5px] border ${root ? "border-accent/35 bg-accent/10 text-[#8dbfff]" : "border-white/[0.1] bg-white/[0.035] text-[#8295a7]"}`}>
          <Icon className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-[13px] font-medium leading-tight text-[#e1eaf1]">{entity.name}</h3>
          <p className="mt-2 text-[11px] leading-[1.6] text-[#8f9eac]">{entity.description}</p>
        </div>
      </div>
    </article>
  );
}

export function DatabaseDiagram() {
  return (
    <div className="rounded-[8px] border border-white/[0.1] bg-[#080f15] p-4 sm:p-5 lg:p-6" aria-label="Simplified Tempo relational domain model">
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/[0.07] pb-4">
        <div>
          <p className="font-mono text-[9px] tracking-[0.18em] text-[#627282]">DOMAIN MODEL</p>
          <p className="mt-1 text-[12px] text-[#9aa8b6]">A simplified view of connected member activity</p>
        </div>
        <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
      </div>

      <div className="grid gap-5 md:grid-cols-[minmax(190px,0.72fr)_minmax(0,1.28fr)] md:items-center md:gap-7">
        <div className="relative md:pr-7">
          <EntityCard entity={entities.member} root />
          <span className="absolute -bottom-5 left-1/2 h-5 w-px bg-accent/35 md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:h-px md:w-7" aria-hidden="true" />
        </div>

        <ul className="relative space-y-3 md:border-l md:border-accent/25 md:pl-7">
          <li className="relative">
            <span className="absolute -top-3 left-1/2 h-3 w-px bg-accent/35 md:left-[-29px] md:top-1/2 md:h-px md:w-7" aria-hidden="true" />
            <EntityCard entity={entities.membership} />
          </li>
          <li className="relative">
            <span className="absolute -top-3 left-1/2 h-3 w-px bg-accent/35 md:left-[-29px] md:top-1/2 md:h-px md:w-7" aria-hidden="true" />
            <div className="space-y-2">
              <EntityCard entity={entities.workoutSession} />
              <div className="relative ml-5 border-l border-accent/25 pl-5">
                <span className="absolute -left-5 top-1/2 h-px w-5 bg-accent/35" aria-hidden="true" />
                <EntityCard entity={entities.exerciseLog} />
              </div>
            </div>
          </li>
          <li className="relative">
            <span className="absolute -top-3 left-1/2 h-3 w-px bg-accent/35 md:left-[-29px] md:top-1/2 md:h-px md:w-7" aria-hidden="true" />
            <EntityCard entity={entities.nutritionPlan} />
          </li>
          <li className="relative">
            <span className="absolute -top-3 left-1/2 h-3 w-px bg-accent/35 md:left-[-29px] md:top-1/2 md:h-px md:w-7" aria-hidden="true" />
            <div className="space-y-2">
              <EntityCard entity={entities.classBooking} />
              <div className="relative ml-5 border-l border-accent/25 pl-5">
                <span className="absolute -left-5 top-1/2 h-px w-5 bg-accent/35" aria-hidden="true" />
                <EntityCard entity={entities.gymClass} />
              </div>
            </div>
          </li>
          <li className="relative">
            <span className="absolute -top-3 left-1/2 h-3 w-px bg-accent/35 md:left-[-29px] md:top-1/2 md:h-px md:w-7" aria-hidden="true" />
            <EntityCard entity={entities.checkIn} />
          </li>
        </ul>
      </div>
    </div>
  );
}
