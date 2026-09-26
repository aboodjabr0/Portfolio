"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileCheck2,
  Globe2,
  KeyRound,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
  Stethoscope,
  TestTube2,
  UserRound,
  UsersRound,
  Workflow,
  X,
} from "lucide-react";
import { TechnologyTag } from "@/components/projects/TechnologyTag";
import { publicPath } from "@/config/paths";

const stackGroups = [
  { label: "Frontend", items: ["React 19", "TypeScript", "Vite"], icon: Globe2 },
  { label: "Backend", items: ["ASP.NET Core", ".NET 10", "Entity Framework Core"], icon: Workflow },
  { label: "Data", items: ["PostgreSQL"], icon: Database },
  { label: "Security", items: ["JWT Bearer Authentication", "Role Policies"], icon: ShieldCheck },
];

const technicalHighlights = [
  "Role-Based Authorization",
  "Arabic / RTL",
  "Appointment Conflict Detection",
  "Clinical Workflow Modeling",
  "Invoice / Payment Rules",
  "PostgreSQL Integration Tests",
];

const roles = [
  {
    name: "Admin",
    icon: UsersRound,
    summary: "Manages the clinic workspace and staff access.",
    items: ["User management and role assignment", "Account activation and password reset", "Doctor-profile linking", "Clinic settings, dental services, and audit logs"],
  },
  {
    name: "Doctor",
    icon: Stethoscope,
    summary: "Works from a doctor-linked operational identity.",
    items: ["Doctor-scoped calendar queries in supported workflows", "Start and update visits", "Complete visits and clinical appointment transitions", "Record follow-up dates and visit information"],
  },
  {
    name: "Receptionist",
    icon: UserRound,
    summary: "Coordinates the clinic’s non-clinical operations.",
    items: ["Schedule and manage appointments", "Handle authorized invoicing and payments", "Perform non-clinical appointment actions", "Cannot complete clinical appointments"],
  },
];

const appointmentStatuses = ["Scheduled", "Arrived", "InProgress", "Completed", "Cancelled", "NoShow"];
const visitDetails = ["Chief complaint", "Diagnosis note", "Treatment note", "Tooth numbers", "Prescription note", "Internal notes"];
const historyDetails = ["Allergies", "Chronic diseases", "Medications", "Previous surgeries", "Pregnancy status", "Medical alerts"];
const billingItems = ["Invoice creation", "Patient / appointment linkage", "Visit and service linkage", "Default service pricing", "Discounts and payments", "Printable invoices and receipts"];
const paymentMethods = ["Cash", "Card", "Bank Transfer", "CliQ", "Other"];
const testScope = ["Health", "Authentication", "Authorization", "Patients", "Appointments", "Calendar", "Visits", "Invoices / payments", "Medical history", "Audit logs"];

const boundaries = [
  { title: "Authentication", included: "JWT login is implemented.", excluded: "Refresh tokens or server-side token revocation." },
  { title: "Reminders", included: "Manual WhatsApp links are supported.", excluded: "Automated WhatsApp Business API reminders." },
  { title: "Payments", included: "Invoice and payment tracking are implemented.", excluded: "Online payment-gateway processing." },
  { title: "Testing", included: "Backend PostgreSQL integration tests are implemented.", excluded: "Frontend automated test coverage." },
  { title: "Scheduling", included: "Day/week scheduling is implemented.", excluded: "Month view, recurring appointments, or drag-and-drop scheduling." },
];

export function ClinoraCaseStudy() {
  return (
    <>
      <ClinoraOverview />
      <ClinoraCaseStudyContent />
    </>
  );
}

export function ClinoraCaseStudyContent() {
  return (
    <>
      <ClinoraRoles />
      <ClinoraWorkflow />
      <ClinoraBilling />
      <ClinoraBilingual />
      <ClinoraReliability />
      <ClinoraBoundaries />
    </>
  );
}

export function ClinoraOverview() {
  return (
    <section id="overview" aria-labelledby="clinora-overview-heading" className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(28,75,122,0.15),transparent_34%)]" />
      <div className="relative mx-auto w-full max-w-[1420px] px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.93fr)_minmax(420px,1.07fr)] lg:gap-16">
          <Reveal className="max-w-[620px]">
            <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">01 / OVERVIEW</p>
            <h1 id="clinora-overview-heading" className="mt-4 text-[clamp(3rem,7vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-[#f1f5f8]">Clinora</h1>
            <p className="mt-5 text-[clamp(1.25rem,2.4vw,1.8rem)] font-medium leading-none tracking-[-0.045em] text-[#83afe0]">Dental Clinic Operations Platform</p>
            <p className="mt-7 max-w-[590px] text-[15px] leading-[1.75] text-[#a0adba]">Clinora brings patient management, appointments, visits, billing, reporting, staff access, and clinic administration into one connected application.</p>
            <p className="mt-5 max-w-[590px] text-[13px] leading-[1.75] text-[#8998a7]">The application serves three staff roles — Admin, Doctor, and Receptionist — with backend-enforced access rules and workflows tailored to their responsibilities.</p>
            <div className="mt-7 flex flex-wrap gap-1.5">
              {technicalHighlights.map((highlight) => <TechnologyTag key={highlight} size="hero">{highlight}</TechnologyTag>)}
            </div>
            <p className="mt-7 max-w-[590px] border-l border-accent/60 pl-4 text-[12px] leading-[1.7] text-[#9aa8b6]">Repository history shows Abdullah contributing across the frontend, backend, database migrations, authentication, deployment configuration, automated testing, and localization.</p>
          </Reveal>

          <Reveal delay={0.08} className="mx-auto w-full max-w-[680px]">
            <div className="relative overflow-hidden rounded-[8px] border border-white/[0.1] bg-[#080f15] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.24)] sm:p-5">
              <div className="relative aspect-[16/7] overflow-hidden rounded-[4px] border border-white/[0.08]">
                <Image src={publicPath("/images/projects/clinora-dark.png")} alt="Clinora project cover" fill priority sizes="(max-width: 1023px) 90vw, 620px" className="object-contain" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b0e]/40 via-transparent to-[#070b0e]/5" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 px-1">
                <span className="font-mono text-[9px] tracking-[0.16em] text-[#627282]">FULL-STACK PRODUCT / MVP</span>
                <span className="inline-flex items-center gap-2 text-[10px] text-[#8e9dac]"><span className="h-1.5 w-1.5 rounded-full bg-[#6f9dcc]" aria-hidden="true" />Engineering case study</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-white/[0.08] pt-8 sm:mt-20 lg:mt-24">
          <p className="font-mono text-[9px] tracking-[0.2em] text-[#627282]">TECHNICAL FOUNDATION</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stackGroups.map((group) => <StackGroup key={group.label} {...group} />)}
          </div>
        </div>

        <div className="mt-12 rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5 sm:p-6 lg:mt-16 lg:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] text-[#627282]">REQUEST PATH</p>
              <h2 className="mt-2 text-[18px] font-medium tracking-[-0.04em] text-[#e9f1f7]">A direct application flow</h2>
            </div>
            <ArrowRight className="hidden h-5 w-5 text-[#5b91c3] sm:block" aria-hidden="true" />
          </div>
          <div className="mt-7 grid gap-2 sm:grid-cols-5 sm:items-center">
            {[
              ["React SPA", "Frontend"],
              ["Feature API Modules / fetch", "Integration"],
              ["ASP.NET Core Controllers", "HTTP boundary"],
              ["Service Layer", "Business rules"],
              ["AppDbContext / EF Core → PostgreSQL", "Persistence"],
            ].map(([title, subtitle], index) => (
              <div key={title} className="flex items-center gap-2 sm:block">
                <div className="min-h-[72px] flex-1 rounded-[6px] border border-white/[0.1] bg-[#0e171f] p-3">
                  <p className="font-mono text-[9px] text-[#5b91c3]">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-2 text-[12px] font-medium leading-[1.3] text-[#d5e1eb]">{title}</p>
                  <p className="mt-1 text-[10px] text-[#778797]">{subtitle}</p>
                </div>
                {index < 4 ? <ArrowRight className="hidden h-3.5 w-3.5 shrink-0 text-[#4d84b5] sm:mx-auto sm:mt-3 sm:block" aria-hidden="true" /> : null}
                {index < 4 ? <ArrowDown className="h-3.5 w-3.5 shrink-0 text-[#4d84b5] sm:hidden" aria-hidden="true" /> : null}
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-[#788898]">The backend structure is Controller → Service → AppDbContext / EF Core → PostgreSQL. There is no repository layer.</p>
        </div>
      </div>
    </section>
  );
}

function StackGroup({ label, items, icon: Icon }: { label: string; items: string[]; icon: typeof Database }) {
  return (
    <div className="rounded-[7px] border border-white/[0.09] bg-[#0a1015] p-4">
      <div className="flex items-center gap-2 text-[#7fa9d4]"><Icon className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" /><span className="font-mono text-[9px] tracking-[0.16em]">{label.toUpperCase()}</span></div>
      <ul className="mt-3 space-y-1 text-[12px] text-[#b1bdc8]">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

function ClinoraRoles() {
  return (
    <section id="roles" aria-labelledby="clinora-roles-heading" className="mx-auto w-full max-w-[1420px] border-b border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <SectionIntro eyebrow="02 / ROLES & ACCESS" heading="Role-Aware Clinic Workflows" copy="Clinora's permissions are enforced by the backend rather than relying only on what the interface chooses to show." />
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {roles.map((role, index) => {
          const Icon = role.icon;
          return <Reveal key={role.name} delay={index * 0.05} className="h-full"><article className="flex h-full flex-col rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5 sm:p-6"><div className="flex items-start justify-between"><div className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-white/[0.1] bg-[#101a22] text-[#7fa9d4]"><Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" /></div><span className="font-mono text-[9px] text-[#5b91c3]">0{index + 1}</span></div><h3 className="mt-5 text-[20px] font-medium tracking-[-0.04em] text-[#e8f0f6]">{role.name}</h3><p className="mt-2 text-[12px] leading-[1.6] text-[#8998a7]">{role.summary}</p><ul className="mt-5 space-y-3 border-t border-white/[0.08] pt-5 text-[12px] leading-[1.55] text-[#acb9c5]">{role.items.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5b91c3]" aria-hidden="true" /><span>{item}</span></li>)}</ul></article></Reveal>;
        })}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.72fr)] lg:items-center">
        <div className="rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5 sm:p-7">
          <p className="font-mono text-[9px] tracking-[0.2em] text-[#627282]">AUTHORIZATION PATH</p>
          <div className="mt-6 grid gap-2 sm:grid-cols-4 sm:items-center">
            {["Authenticated User", "JWT Claims", "Role Policy", "Allowed Operation"].map((label, index) => <div key={label} className="flex items-center gap-2 sm:block"><div className="flex min-h-[64px] flex-1 items-center justify-center rounded-[6px] border border-white/[0.1] bg-[#0e171f] px-3 text-center text-[12px] font-medium text-[#d7e3ed]"><span>{label}</span></div>{index < 3 ? <ArrowRight className="hidden h-3.5 w-3.5 text-[#4d84b5] sm:mx-auto sm:mt-3 sm:block" aria-hidden="true" /> : null}{index < 3 ? <ArrowDown className="h-3.5 w-3.5 shrink-0 text-[#4d84b5] sm:hidden" aria-hidden="true" /> : null}</div>)}
          </div>
          <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.08] pt-5"><span className="text-[10px] text-[#788898]">Policy branches:</span>{roles.map((role) => <span key={role.name} className="rounded-full border border-white/[0.12] px-2.5 py-1 text-[10px] text-[#aab8c5]">{role.name}</span>)}</div>
        </div>
        <div className="border-l border-accent/50 pl-5 sm:pl-6"><p className="text-[13px] leading-[1.75] text-[#9aa8b6]">Authentication uses signed JWT bearer tokens containing user identity and role claims. ASP.NET Core policies and additional controller/service checks enforce staff permissions on the backend.</p></div>
      </div>

      <div className="mt-8 flex gap-3 rounded-[7px] border border-white/[0.08] bg-[#091016] p-4 sm:p-5"><ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#5b91c3]" aria-hidden="true" /><p className="text-[12px] leading-[1.7] text-[#9aa8b6]">Important operations are recorded with user identity, role, action, entity context, IP address, user agent, and timestamp. Audit summaries avoid storing passwords, tokens, and clinical note content.</p></div>
    </section>
  );
}

function ClinoraWorkflow() {
  return (
    <section id="workflow" aria-labelledby="clinora-workflow-heading" className="mx-auto w-full max-w-[1420px] border-b border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <SectionIntro eyebrow="03 / CLINIC WORKFLOW" heading="From Appointment to Completed Visit" copy="Clinora connects scheduling and clinical workflows instead of treating each screen as an isolated record." />
      <FlowSteps items={["Patient", "Appointment", "Doctor Assignment", "Appointment Status", "Visit", "Clinical Notes", "Follow-Up"]} />

      <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
        <InfoPanel label="APPOINTMENT CONTRACT" title="A scheduled slot has explicit rules.">
          <p className="text-[12px] leading-[1.7] text-[#97a6b4]">Every appointment requires a patient, doctor, dental service, date, start time, and end time.</p>
          <div className="mt-5 flex flex-wrap gap-1.5">{["Patient", "Doctor", "Dental service", "Date", "Start time", "End time"].map((item) => <span key={item} className="rounded-[4px] border border-white/[0.1] bg-[#0e171f] px-2.5 py-1.5 text-[10px] text-[#aebbc7]">{item}</span>)}</div>
          <div className="mt-6 border-t border-white/[0.08] pt-5"><p className="font-mono text-[9px] tracking-[0.17em] text-[#627282]">STATUS MODEL</p><div className="mt-3 flex flex-wrap gap-1.5">{appointmentStatuses.map((status) => <span key={status} className="rounded-full border border-white/[0.1] px-2.5 py-1 text-[10px] text-[#99a8b6]">{status}</span>)}</div></div>
        </InfoPanel>
        <div className="rounded-[8px] border border-accent/25 bg-[linear-gradient(135deg,rgba(13,28,42,0.95),rgba(10,16,21,0.98))] p-5 sm:p-7">
          <div className="flex items-start gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] border border-accent/25 bg-accent/[0.09] text-[#7fb3ea]"><LockKeyhole className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" /></div><div><p className="font-mono text-[9px] tracking-[0.18em] text-[#6b9bcc]">ENGINEERING CHECK</p><h3 className="mt-2 text-[20px] font-medium tracking-[-0.04em] text-[#e8f1f8]">Appointment Conflict Detection</h3></div></div>
          <p className="mt-6 text-[12px] leading-[1.7] text-[#a4b3c1]"><span className="text-[#d5e2ec]">Problem:</span> A doctor should not be booked for overlapping active appointments.</p>
          <p className="mt-3 text-[12px] leading-[1.7] text-[#a4b3c1]"><span className="text-[#d5e2ec]">Approach:</span> Clinora checks for interval overlap using the requested date, doctor, start/end times, and appointment state before saving.</p>
          <div className="mt-6 rounded-[6px] border border-white/[0.1] bg-[#070d12] p-4 font-mono text-[11px] leading-[1.8] text-[#9fc4e9]"><span className="text-[#73899c]">existing.Start</span> <span className="text-[#c4d2de]">&lt;</span> <span className="text-[#dce8f3]">requested.End</span><br /><span className="text-[#a9b7c4]">AND</span><br /><span className="text-[#73899c]">existing.End</span> <span className="text-[#c4d2de]">&gt;</span> <span className="text-[#dce8f3]">requested.Start</span></div>
          <p className="mt-3 text-[10px] text-[#788a9b]">Conceptual interval rule; cancelled and no-show appointments do not count toward active overlap conflicts. Edits rerun the validation.</p>
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <InfoPanel label="VISIT WORKFLOW" title="Clinical detail follows the appointment."><p className="text-[12px] leading-[1.7] text-[#97a6b4]">A doctor can start a visit from an appointment, edit clinical notes, complete the visit, and record a follow-up date.</p><div className="mt-5 flex flex-wrap gap-1.5">{visitDetails.map((item) => <span key={item} className="rounded-[4px] border border-white/[0.1] px-2.5 py-1.5 text-[10px] text-[#9fadb9]">{item}</span>)}</div></InfoPanel>
        <InfoPanel label="PATIENT HISTORY" title="Risk context stays structured."><p className="text-[12px] leading-[1.7] text-[#97a6b4]">Structured medical history and pre-treatment risk-alert presentation help staff see relevant patient context without implying automated diagnosis or clinical decision support.</p><div className="mt-5 flex flex-wrap gap-1.5">{historyDetails.map((item) => <span key={item} className="rounded-[4px] border border-white/[0.1] px-2.5 py-1.5 text-[10px] text-[#9fadb9]">{item}</span>)}</div></InfoPanel>
      </div>
    </section>
  );
}

function FlowSteps({ items }: { items: string[] }) {
  return <div className="mt-12 rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-4 sm:p-6"><ol className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-0" aria-label="Patient appointment to follow-up workflow">{items.map((item, index) => <li key={item} className="flex flex-1 items-center gap-2 lg:block"><div className="flex min-h-[58px] flex-1 items-center gap-3 rounded-[6px] border border-white/[0.1] bg-[#0e171f] px-3.5 py-3 lg:min-h-[82px] lg:flex-col lg:items-start lg:justify-between"><span className="font-mono text-[9px] text-[#5b91c3]">{String(index + 1).padStart(2, "0")}</span><span className="text-[12px] font-medium text-[#d5e1eb]">{item}</span></div>{index < items.length - 1 ? <><ArrowRight className="hidden h-3.5 w-3.5 shrink-0 text-[#4d84b5] lg:mx-2 lg:block" aria-hidden="true" /><ArrowDown className="h-3.5 w-3.5 shrink-0 text-[#4d84b5] lg:hidden" aria-hidden="true" /></> : null}</li>)}</ol></div>;
}

function ClinoraBilling() {
  return (
    <section id="billing" aria-labelledby="clinora-billing-heading" className="mx-auto w-full max-w-[1420px] border-b border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <SectionIntro eyebrow="04 / BILLING" heading="Billing as a Downstream Workflow" copy="Appointments and visits can continue into invoicing and payment workflows while financial values remain controlled by backend business rules." />
      <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(310px,0.85fr)] lg:items-start">
        <div className="rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5 sm:p-7"><div className="flex items-center gap-3"><ReceiptText className="h-4 w-4 text-[#6fa3d7]" aria-hidden="true" /><p className="font-mono text-[9px] tracking-[0.18em] text-[#627282]">FINANCIAL FLOW</p></div><FlowSteps items={["Appointment / Visit", "Invoice", "Subtotal", "Discount", "Total", "Payment(s)", "Remaining Balance", "Payment Status"]} /></div>
        <InfoPanel label="SUPPORTED OPERATIONS" title="The invoice remains connected to clinic work."><ul className="space-y-3 text-[12px] leading-[1.55] text-[#aab8c4]">{billingItems.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5b91c3]" aria-hidden="true" /><span>{item}</span></li>)}</ul><div className="mt-6 border-t border-white/[0.08] pt-5"><p className="font-mono text-[9px] tracking-[0.17em] text-[#627282]">PAYMENT METHODS</p><div className="mt-3 flex flex-wrap gap-1.5">{paymentMethods.map((method) => <span key={method} className="rounded-full border border-white/[0.1] px-2.5 py-1 text-[10px] text-[#9fadb9]">{method}</span>)}</div></div></InfoPanel>
      </div>
      <div className="mt-5 rounded-[8px] border border-accent/25 bg-[linear-gradient(135deg,rgba(13,28,42,0.95),rgba(10,16,21,0.98))] p-5 sm:p-7"><div className="flex items-center gap-3"><FileCheck2 className="h-4 w-4 text-[#7fb3ea]" aria-hidden="true" /><h3 className="text-[18px] font-medium tracking-[-0.04em] text-[#e7f0f7]">Keeping Financial State Consistent</h3></div><p className="mt-4 max-w-[760px] text-[12px] leading-[1.7] text-[#a4b3c1]">Invoice totals, paid amounts, remaining balance, and payment status are recalculated through the backend rather than being independently controlled by the UI.</p><div className="mt-7 grid gap-3 sm:grid-cols-3 sm:items-center"><Formula label="Subtotal" operator="−" value="Discount" result="Total" /><Formula label="Total" operator="−" value="Paid" result="Remaining" /><div className="rounded-[6px] border border-white/[0.1] bg-[#0b141b] p-4"><p className="font-mono text-[9px] tracking-[0.15em] text-[#627282]">STATUS</p><div className="mt-3 flex flex-wrap gap-1.5">{["Unpaid", "Partially Paid", "Paid"].map((status) => <span key={status} className="rounded-full border border-white/[0.1] px-2 py-1 text-[9px] text-[#aebbc7]">{status}</span>)}</div></div></div><p className="mt-5 flex items-center gap-2 text-[11px] text-[#9cabb8]"><CheckCircle2 className="h-3.5 w-3.5 text-[#5b91c3]" aria-hidden="true" />Overpayments are rejected.</p></div>
    </section>
  );
}

function Formula({ label, operator, value, result }: { label: string; operator: string; value: string; result: string }) {
  return <div className="rounded-[6px] border border-white/[0.1] bg-[#0b141b] p-4"><p className="font-mono text-[9px] tracking-[0.15em] text-[#627282]">CALCULATION</p><div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] text-[#c2d0dc]"><span>{label}</span><span className="text-[#5b91c3]">{operator}</span><span>{value}</span><span className="text-[#5b91c3]">=</span><strong className="text-[#e8f2f9]">{result}</strong></div></div>;
}

function ClinoraBilingual() {
  return (
    <section id="bilingual" aria-labelledby="clinora-bilingual-heading" className="mx-auto w-full max-w-[1420px] border-b border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <SectionIntro eyebrow="05 / BILINGUAL UX" heading="English & Arabic by Design" copy="Arabic support changes the structure of the interface, not just the text." />
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5 sm:p-7"><div className="flex items-center gap-3"><KeyRound className="h-4 w-4 text-[#6fa3d7]" aria-hidden="true" /><h3 className="text-[18px] font-medium tracking-[-0.04em] text-[#e7f0f7]">Typed Translation Catalog</h3></div><p className="mt-4 text-[12px] leading-[1.7] text-[#9aa8b6]">English translation keys define the translation type, while Arabic translations are required to satisfy the same key set.</p><div className="mt-6 space-y-2 font-mono text-[11px]"><div className="rounded-[5px] border border-white/[0.1] bg-[#070d12] px-4 py-3 text-[#d3e2ee]">English keys</div><div className="pl-5 text-[#5b91c3]">↓</div><div className="rounded-[5px] border border-accent/25 bg-accent/[0.06] px-4 py-3 text-[#9fc4e9]">TranslationKey type</div><div className="pl-5 text-[#5b91c3]">↓</div><div className="rounded-[5px] border border-white/[0.1] bg-[#070d12] px-4 py-3 text-[#d3e2ee]">Arabic Record&lt;TranslationKey, string&gt;</div></div><p className="mt-5 border-l border-accent/50 pl-4 text-[11px] leading-[1.65] text-[#8999a8]">The benefit is compile-time pressure against missing translation keys without introducing a full external i18n framework.</p></div>
        <div className="rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5 sm:p-7"><div className="flex items-center gap-3"><Globe2 className="h-4 w-4 text-[#6fa3d7]" aria-hidden="true" /><h3 id="clinora-bilingual-heading" className="text-[18px] font-medium tracking-[-0.04em] text-[#e7f0f7]">Direction is a document concern</h3></div><p className="mt-4 text-[12px] leading-[1.7] text-[#9aa8b6]">Language state lives in React LanguageContext and persists through localStorage. A pre-paint initializer sets the initial language and direction before the UI appears.</p><div className="mt-6 grid gap-3 sm:grid-cols-2"><DirectionCard label="LTR" direction="Navigation → Content" code="document.documentElement.dir = 'ltr'" /><DirectionCard label="RTL" direction="Content ← Navigation" code="document.documentElement.dir = 'rtl'" /></div><div className="mt-5 flex flex-wrap gap-2 text-[10px] text-[#8f9eac]"><span className="rounded-full border border-white/[0.1] px-2.5 py-1">document.documentElement.lang</span><span className="rounded-full border border-white/[0.1] px-2.5 py-1">CSS logical properties</span><span className="rounded-full border border-white/[0.1] px-2.5 py-1">text-align: start</span><span className="rounded-full border border-white/[0.1] px-2.5 py-1">RTL-aware print layouts</span></div></div>
      </div>
      <div className="mt-5 flex items-start gap-3 rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5 sm:p-6"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[5px] border border-white/[0.1] bg-[#101a22] text-[#7fa9d4]"><span className="text-[12px] font-medium">◐</span></div><div><h3 className="text-[15px] font-medium text-[#dbe6ef]">Light & Dark Themes</h3><p className="mt-1 text-[12px] leading-[1.65] text-[#8998a7]">Theme state is implemented through <code className="text-[#b9d4ed]">data-theme</code> and centralized CSS variables, while responsive behavior remains shared across both directions.</p></div></div>
    </section>
  );
}

function DirectionCard({ label, direction, code }: { label: string; direction: string; code: string }) {
  return <div className="rounded-[6px] border border-white/[0.1] bg-[#0e171f] p-4"><p className="font-mono text-[9px] tracking-[0.16em] text-[#5b91c3]">{label}</p><p className="mt-3 text-[15px] font-medium tracking-[-0.03em] text-[#e1ebf3]">{direction}</p><code className="mt-3 block break-words text-[9px] leading-[1.5] text-[#7f93a6]">{code}</code></div>;
}

function ClinoraReliability() {
  return (
    <section id="reliability" aria-labelledby="clinora-reliability-heading" className="mx-auto w-full max-w-[1420px] border-b border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <SectionIntro eyebrow="06 / RELIABILITY" heading="Testing & Delivery" copy="Clinora's backend is tested against PostgreSQL itself rather than relying only on mocked or in-memory persistence." />
      <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="rounded-[8px] border border-accent/25 bg-[linear-gradient(145deg,rgba(13,28,42,0.95),rgba(10,16,21,0.98))] p-5 sm:p-7"><div className="flex items-center gap-3"><TestTube2 className="h-4 w-4 text-[#7fb3ea]" aria-hidden="true" /><p className="font-mono text-[9px] tracking-[0.18em] text-[#6b9bcc]">BACKEND INTEGRATION TESTS</p></div><div className="mt-8 flex items-end gap-3"><strong className="font-mono text-[clamp(3.5rem,8vw,5.5rem)] font-medium leading-none tracking-[-0.08em] text-[#e8f3fb]">93</strong><span className="pb-1.5 text-[12px] uppercase tracking-[0.14em] text-[#78a8d6]">passed</span></div><div className="mt-5 flex gap-4 border-t border-white/[0.1] pt-4 font-mono text-[10px]"><span className="text-[#a7b9c8]">0 FAILED</span><span className="text-[#778b9d]">0 SKIPPED</span></div><p className="mt-5 text-[10px] leading-[1.6] text-[#788c9e]">Verified result, not a code-coverage percentage.</p></div>
        <div className="rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5 sm:p-7"><div className="flex items-center gap-3"><ClipboardCheck className="h-4 w-4 text-[#6fa3d7]" aria-hidden="true" /><h3 id="clinora-reliability-heading" className="text-[18px] font-medium tracking-[-0.04em] text-[#e7f0f7]">HTTP-level confidence</h3></div><p className="mt-4 text-[12px] leading-[1.7] text-[#9aa8b6]">The backend test suite uses xUnit, WebApplicationFactory, and a PostgreSQL 16 Testcontainer. A compact subset of the exercised areas:</p><div className="mt-5 flex flex-wrap gap-1.5">{testScope.map((item) => <span key={item} className="rounded-full border border-white/[0.1] px-2.5 py-1 text-[10px] text-[#a4b2bf]">{item}</span>)}</div></div>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2"><div className="rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5 sm:p-6"><p className="font-mono text-[9px] tracking-[0.18em] text-[#627282]">WHY TESTCONTAINERS?</p><p className="mt-4 text-[13px] leading-[1.7] text-[#a2b0bd]">Using a disposable PostgreSQL container allows the tests to exercise real migrations, relational constraints, and database query behavior through the HTTP API.</p></div><div className="rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5 sm:p-6"><p className="font-mono text-[9px] tracking-[0.18em] text-[#627282]">DELIVERY TOOLING</p><div className="mt-4 flex flex-wrap gap-2">{["Docker", "GitHub Actions CI", "EF Core migrations", "Environment configuration"].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] px-2.5 py-1.5 text-[10px] text-[#a4b2bf]"><Check className="h-3 w-3 text-[#5b91c3]" aria-hidden="true" />{item}</span>)}</div></div></div>
      <p className="mt-6 text-[11px] leading-[1.65] text-[#7c8d9c]">The repository documents deployment targets including a Render backend, Neon PostgreSQL, and a Vercel or Netlify frontend; these are shown here as delivery context, not confirmed live production infrastructure.</p>
    </section>
  );
}

function ClinoraBoundaries() {
  return (
    <section id="boundaries" aria-labelledby="clinora-boundaries-heading" className="mx-auto w-full max-w-[1420px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <SectionIntro eyebrow="07 / SCOPE" heading="MVP Boundaries" copy="Being clear about what a system does not implement is part of describing it accurately." />
      <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-5">{boundaries.map((boundary) => <article key={boundary.title} className="rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5"><h3 className="text-[15px] font-medium tracking-[-0.03em] text-[#e0eaf2]">{boundary.title}</h3><div className="mt-5 space-y-4 text-[11px] leading-[1.6]"><div><p className="mb-1 flex items-center gap-1.5 font-mono text-[8px] tracking-[0.12em] text-[#76b8a0]"><Check className="h-3 w-3" aria-hidden="true" />INCLUDED</p><p className="text-[#a0afbc]">{boundary.included}</p></div><div className="border-t border-white/[0.08] pt-4"><p className="mb-1 flex items-center gap-1.5 font-mono text-[8px] tracking-[0.12em] text-[#8b98a5]"><X className="h-3 w-3" aria-hidden="true" />NOT INCLUDED</p><p className="text-[#808f9d]">{boundary.excluded}</p></div></div></article>)}</div>
      <div className="mt-8 border-l border-white/[0.18] pl-5 sm:pl-6"><p className="max-w-[880px] text-[12px] leading-[1.75] text-[#8998a7]">The project includes JWT authentication, role-based backend policies, validation, and audit logging, but it is presented as a production-like MVP rather than as a formally audited or compliance-certified medical system.</p></div>
    </section>
  );
}

function SectionIntro({ eyebrow, heading, copy }: { eyebrow: string; heading: string; copy: string }) {
  return <div className="max-w-[760px]"><p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">{eyebrow}</p><h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">{heading}</h2><p className="mt-6 max-w-[700px] text-[15px] leading-[1.75] text-[#9aa8b6]">{copy}</p></div>;
}

function InfoPanel({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return <div className="rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5 sm:p-7"><p className="font-mono text-[9px] tracking-[0.18em] text-[#627282]">{label}</p><h3 className="mt-3 text-[18px] font-medium tracking-[-0.04em] text-[#e7f0f7]">{title}</h3><div className="mt-5">{children}</div></div>;
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return <motion.div initial={reduceMotion ? false : { opacity: 0, y: 10 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}
