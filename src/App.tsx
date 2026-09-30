import { useState } from 'react';

// Navigation component
function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const sections = [
    { id: 'thesis', label: 'Tesis' },
    { id: 'need', label: 'Necesidad' },
    { id: 'evidence', label: 'Evidencia' },
    { id: 'product', label: 'Producto' },
    { id: 'ai-engine', label: 'Motor IA' },
    { id: 'business', label: 'Negocio' },
    { id: 'architecture', label: 'Arquitectura' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'risks', label: 'Riesgos' },
    { id: 'mvp', label: 'MVP 30d' },
    { id: 'moat', label: 'Moat' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">TL</span>
            </div>
            <span className="text-white font-semibold text-sm">TrustLayer</span>
            <span className="text-slate-400 text-xs hidden sm:inline ml-2">Venture Architecture</span>
          </div>
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-slate-300 hover:text-emerald-400 text-xs px-2 py-1 rounded transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
          <button
            className="lg:hidden text-slate-300 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="lg:hidden pb-4 grid grid-cols-3 gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMobileOpen(false)}
                className="text-slate-300 hover:text-emerald-400 text-xs px-2 py-1 rounded transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-300 text-sm font-medium">Venture Architecture Document</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            TrustLayer
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          Compliance unificado para PYMEs europeas ante la convergencia regulatoria
        </p>
        
        <p className="text-base text-slate-400 mb-10 max-w-2xl mx-auto">
          GDPR + EU AI Act + NIS2 + cuestionarios de seguridad → una sola plataforma que mapea controles una vez y cumple en todos los frentes.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="text-2xl font-bold text-emerald-400">100K+</div>
            <div className="text-xs text-slate-400">Empresas afectadas NIS2</div>
          </div>
          <div className="px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="text-2xl font-bold text-cyan-400">Ago 2026</div>
            <div className="text-xs text-slate-400">AI Act high-risk enforcement</div>
          </div>
          <div className="px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="text-2xl font-bold text-amber-400">10-40h</div>
            <div className="text-xs text-slate-400">Por cuestionario de seguridad</div>
          </div>
          <div className="px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="text-2xl font-bold text-rose-400">€15K-80K</div>
            <div className="text-xs text-slate-400">Coste SOC2 actual</div>
          </div>
        </div>
        
        <a href="#thesis" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 font-semibold hover:opacity-90 transition-opacity">
          Explorar arquitectura completa
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

// Section wrapper
function Section({ id, title, subtitle, children, dark = false }: { id: string; title: string; subtitle?: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${dark ? 'bg-slate-900' : 'bg-slate-800'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{title}</h2>
          {subtitle && <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

// Thesis Section
function ThesisSection() {
  return (
    <Section id="thesis" title="Nombre + Tesis" subtitle="La propuesta en una frase">
      <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8 sm:p-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <span className="text-slate-900 font-bold text-lg">TL</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">TrustLayer</h3>
            <p className="text-emerald-300 text-lg font-medium">
              "La primera plataforma de compliance unificado que permite a PYMEs europeas (10-200 empleados) demostrar conformidad verificable con GDPR + AI Act + NIS2 + cuestionarios de seguridad de clientes enterprise, mapeando controles una sola vez y generando evidencia desde sistemas reales — no documentación ficticia."
            </p>
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-4">
            <div className="text-emerald-400 text-sm font-medium mb-1">Problema</div>
            <div className="text-slate-300 text-sm">Convergencia regulatoria sin herramienta unificada para PYMEs</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <div className="text-cyan-400 text-sm font-medium mb-1">Momento</div>
            <div className="text-slate-300 text-sm">AI Act enforcement Ago 2026 + NIS2 activo desde Dic 2025</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4">
            <div className="text-amber-400 text-sm font-medium mb-1">Diferenciador</div>
            <div className="text-slate-300 text-sm">Evidencia verificable desde sistemas reales vs. "compliance theater"</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Need Section
function NeedSection() {
  const signals = [
    { signal: 'NIS2 transpuesto (Dic 2025)', friction: '100K+ empresas EU ahora deben gestionar seguridad supply chain', jtb: 'Demostrar compliance a clientes enterprise sin equipo dedicado' },
    { signal: 'AI Act high-risk (Ago 2026)', friction: 'PYMEs que usan/incorporan IA no saben si su sistema es "high-risk"', jtb: 'Clasificar y documentar sistemas AI sin contratar consultor €10K/día' },
    { signal: 'Cuestionarios de seguridad crecientes', friction: '10-40h por cuestionnaire, docenas por trimestre en SaaS growth', jtb: 'Responder rápido sin arriesgar precisión ni perder deals' },
    { signal: 'Escándalo "fake compliance" (Delve 2026)', friction: 'Desconfianza en herramientas que generan documentación sin evidencia real', jtb: 'Demostrar compliance verificable, no solo badges' },
    { signal: 'Costes SOC2/Vanta €15K-80K/año', friction: 'Inasequible para startups pre-revenue o PYMEs <50 empleados', jtb: 'Acceder a enterprise deals con inversión proporcional al tamaño' },
  ];

  return (
    <Section id="need" title="Necesidad Latente" subtitle="SEÑAL → FRICCIÓN → JOB-TO-BE-DONE" dark>
      <div className="space-y-4">
        {signals.map((s, i) => (
          <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-emerald-400 font-medium uppercase tracking-wide mb-1">Señal</div>
                <div className="text-slate-200 text-sm">{s.signal}</div>
              </div>
              <div>
                <div className="text-xs text-cyan-400 font-medium uppercase tracking-wide mb-1">Fricción</div>
                <div className="text-slate-200 text-sm">{s.friction}</div>
              </div>
              <div>
                <div className="text-xs text-amber-400 font-medium uppercase tracking-wide mb-1">Job-to-be-done</div>
                <div className="text-slate-200 text-sm">{s.jtb}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h4 className="text-white font-semibold mb-3">Workaround actual y por qué falla</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-slate-300 text-sm"><strong className="text-slate-100">1.</strong> Contratar consultor/legal externo (€3K-15K por framework)</div>
            <div className="text-rose-300 text-xs">→ No escala, no cubre convergencia, dependes de disponibilidad</div>
            <div className="text-slate-300 text-sm"><strong className="text-slate-100">2.</strong> Vanta/Drata para SOC2 + spreadsheet para GDPR + otro tool para AI Act</div>
            <div className="text-rose-300 text-xs">→ Fragmentado, €30K+/año, duplicación de esfuerzo en controles compartidos</div>
          </div>
          <div className="space-y-2">
            <div className="text-slate-300 text-sm"><strong className="text-slate-100">3.</strong> Responder cuestionarios manualmente en Excel/Docs</div>
            <div className="text-rose-300 text-xs">→ 10-40h cada uno, inconsistente, bloquea deals</div>
            <div className="text-slate-300 text-sm"><strong className="text-slate-100">4.</strong> Ignorar hasta que un cliente enterprise lo exija</div>
            <div className="text-rose-300 text-xs">→ Pierdes deals, riesgo de multa NIS2 (hasta 2% facturación global)</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Evidence Section
function EvidenceSection() {
  return (
    <Section id="evidence" title="Evidencia / Supuestos">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-700/30 border border-emerald-500/20 rounded-xl p-6">
          <h4 className="text-emerald-400 font-semibold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            HECHOS (verificados)
          </h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> NIS2 transpuesto en estados miembro desde Oct 2024, en vigor Dic 2025. Afecta 100K+ empresas EU.</li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> EU AI Act: obligaciones para sistemas AI de alto riesgo aplicables desde 2 agosto 2026.</li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> Cuestionarios de seguridad: 10-40h cada uno manualmente (Cyberbase AI, Steerlab).</li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> SOC2 first-year costs: $15K-$80K all-in (Reddit r/soc2, múltiples founders).</li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> Escándalo Delve (Mar 2026): acusado de evidencia fabricada, clientes como LiteLLM y Context AI migraron.</li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> 96% enterprises usan AI agents, solo 21% pueden gobernarlos (miniOrange 2025).</li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> GDPR compliance puede incrementar costes empresariales 20% (JD Supra/EC).</li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> 6 de 10 EU/UK MSMEs reportan acceso retrasado a modelos AI frontier por regulación (ACT Online).</li>
          </ul>
        </div>
        
        <div className="bg-slate-700/30 border border-amber-500/20 rounded-xl p-6">
          <h4 className="text-amber-400 font-semibold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
            INFERENCIAS / SUPUESTOS (a validar)
          </h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2"><span className="text-amber-400">⚠</span> <strong>[INFERENCIA]</strong> PYMEs EU están dispuestas a pagar €200-500/mes por compliance unificado (vs. herramientas enterprise de €1.5K+/mes).</li>
            <li className="flex gap-2"><span className="text-amber-400">⚠</span> <strong>[SUPUESTO]</strong> El "trust gap" post-Delve crea demanda de soluciones verificables vs. badges rápidos.</li>
            <li className="flex gap-2"><span className="text-amber-400">⚠</span> <strong>[INFERENCIA]</strong> La convergencia GDPR+AI Act+NIS2 genera suficiente overlap de controles para que "mapear una vez" sea viable técnicamente.</li>
            <li className="flex gap-2"><span className="text-amber-400">⚠</span> <strong>[SUPUESTO]</strong> Los compradores enterprise aceptarán evidencia generada por plataforma (vs. auditor tradicional) si es verificable.</li>
            <li className="flex gap-2"><span className="text-amber-400">⚠</span> <strong>[NO VERIFICADO]</strong> No se ha cuantificado TAM exacto de PYMEs EU que necesitan los 4 frameworks simultáneamente.</li>
            <li className="flex gap-2"><span className="text-amber-400">⚠</span> <strong>[SUPUESTO]</strong> La automatización de cuestionarios con evidencia real reduce tiempo de respuesta en {'>'}70%.</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 bg-slate-700/30 border border-cyan-500/20 rounded-xl p-6">
        <h4 className="text-cyan-400 font-semibold mb-3">¿Por qué las soluciones actuales fallan?</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="text-white font-medium text-sm mb-1">Vanta / Drata</div>
            <div className="text-slate-400 text-xs">Enterprise-first pricing (€15K+/año). SOC2/ISO-centric. No cubren AI Act ni NIS2 específicamente. No diseñados para PYMEs EU.</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="text-white font-medium text-sm mb-1">Delve / Skypher</div>
            <div className="text-slate-400 text-xs">Questionnaire automation. No unifican marcos regulatorios. Riesgo de "fake compliance" expuesto. No verifican evidencia contra sistemas reales.</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="text-white font-medium text-sm mb-1">ISMS.online / Sprinto</div>
            <div className="text-slate-400 text-xs">ISMS-centric. Cubren ISO 27001 bien pero no la convergencia multi-framework. No automatizan cuestionarios de forma inteligente.</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="text-white font-medium text-sm mb-1">Consultores legales</div>
            <div className="text-slate-400 text-xs">Caros (€200-500/h), no escalables, sin monitorización continua, sin integración con sistemas técnicos. Respuesta reactiva.</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Product Section
function ProductSection() {
  return (
    <Section id="product" title="Producto y Experiencia" dark>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Flujo de usuario</h4>
          <div className="space-y-4">
            {[
              { step: '1', trigger: 'Trigger', desc: 'Cliente enterprise pide SOC2/AI Act compliance o llega cuestionario NIS2. Founder siente el bloqueo de deal.' },
              { step: '2', trigger: 'Onboarding (15 min)', desc: 'Conecta GitHub, AWS/Azure, Okta/Google Workspace, HR system. TrustLayer escanea automáticamente y genera inventory de activos + controles existentes.' },
              { step: '3', trigger: 'Mapeo automático', desc: 'IA clasifica sistemas AI, identifica overlap GDPR↔AI Act↔NIS2↔SOC2. Genera "compliance graph" con controles compartidos marcados.' },
              { step: '4', trigger: 'Gap analysis + remediación', desc: 'Muestra controles faltantes con prioridad por impacto en deal. Sugiere remediación (política template + evidencia técnica auto-generada).' },
              { step: '5', trigger: 'Trust Center + Cuestionarios', desc: 'Publica trust center verificable. Auto-responde cuestionarios desde evidencia real (no texto inventado). Cada claim linkeado a prueba técnica.' },
              { step: '6', trigger: 'Monitorización continua', desc: 'Alertas cuando un control se degrada. Evidencia siempre actualizada. Reportes on-demand para auditor o cliente.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400 text-xs font-bold">{s.step}</span>
                </div>
                <div>
                  <div className="text-emerald-300 text-xs font-medium">{s.trigger}</div>
                  <div className="text-slate-300 text-sm">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">MVP (v1.0)</h4>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-lg">◆</span>
                <div>
                  <div className="text-white text-sm font-medium">Compliance Graph Engine</div>
                  <div className="text-slate-400 text-xs">Mapeo automático de controles compartidos entre GDPR, AI Act, NIS2, SOC2</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-lg">◆</span>
                <div>
                  <div className="text-white text-sm font-medium">Evidence Collector</div>
                  <div className="text-slate-400 text-xs">Integración con GitHub, cloud providers, IdP. Genera evidencia verificable automáticamente.</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-lg">◆</span>
                <div>
                  <div className="text-white text-sm font-medium">Questionnaire Auto-Responder</div>
                  <div className="text-slate-400 text-xs">Responde desde evidencia real. Cada respuesta linkeada a prueba técnica. HITL para revisión.</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-lg">◆</span>
                <div>
                  <div className="text-white text-sm font-medium">Verifiable Trust Center</div>
                  <div className="text-slate-400 text-xs">Página pública con claims verificables (no solo badges). Cryptographic proof of controls.</div>
                </div>
              </div>
            </div>
          </div>
          
          <h4 className="text-white font-semibold text-lg mb-4">Killer Feature</h4>
          <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl p-6">
            <div className="text-white font-medium mb-2">"Compliance Graph" con evidencia criptográficamente verificable</div>
            <div className="text-slate-300 text-sm">
              A diferencia de herramientas que generan documentación estática, TrustLayer mantiene un grafo vivo de controles → evidencia → frameworks. Cada claim de compliance tiene un hash verificable contra el estado real del sistema en un momento dado. Si un control se rompe, el grafo se actualiza y el trust center lo refleja.
            </div>
            <div className="mt-3 text-emerald-300 text-xs font-medium">
              → Imposible de falsificar. → Elimina "compliance theater". → Diferenciador vs. Delve/Vanta.
            </div>
          </div>
          
          <h4 className="text-white font-semibold text-lg mb-4 mt-6">Loop de retención</h4>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm text-slate-300">
            Nuevo cuestionario llega → se auto-responde en minutos (vs. días) → deal avanza → usuario ve valor inmediato → monitorización continua detecta cambios → alertas proactivas → usuario no puede dejar sin perder visibilidad → nuevo framework se añade fácilmente (lock-in por datos acumulados).
          </div>
        </div>
      </div>
    </Section>
  );
}

// AI Engine Section
function AIEngineSection() {
  return (
    <Section id="ai-engine" title="Motor Algorítmico / IA">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">1. Control Mapper (Determinista + IA)</h4>
            <div className="text-sm text-slate-300 space-y-2">
              <div><span className="text-cyan-400">Input:</span> Inventario de sistemas, políticas, configuraciones técnicas</div>
              <div><span className="text-cyan-400">Procesamiento:</span> RAG sobre textos regulatorios (GDPR, AI Act, NIS2, SOC2 criteria) + control ontology pre-construida + LLM para matching semántico de controles no-obvios</div>
              <div><span className="text-cyan-400">Decisión:</span> Mapa de overlapping controls con confidence score</div>
              <div><span className="text-cyan-400">Output:</span> Compliance graph con nodos (controles) y aristas (frameworks que cubren)</div>
              <div><span className="text-cyan-400">Feedback:</span> Validación humana en mapeos con confidence &lt;0.8 → mejora ontology</div>
            </div>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">2. Evidence Collector (Determinista)</h4>
            <div className="text-sm text-slate-300 space-y-2">
              <div><span className="text-cyan-400">Input:</span> APIs de GitHub, AWS/Azure/GCP, Okta/Google, Jira, HR systems</div>
              <div><span className="text-cyan-400">Procesamiento:</span> Polling programado + webhooks. Extracción de configuraciones, logs de acceso, PR approvals, MFA status, encryption configs.</div>
              <div><span className="text-cyan-400">Decisión:</span> ¿Este control tiene evidencia válida ahora? (Sí/No/Degradado)</div>
              <div><span className="text-cyan-400">Output:</span> Evidence objects con timestamp, hash, source reference</div>
              <div><span className="text-cyan-400">Feedback:</span> Si evidence expira → alerta. Si source cambia → re-scan automático.</div>
            </div>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">3. Questionnaire Responder (IA con HITL)</h4>
            <div className="text-sm text-slate-300 space-y-2">
              <div><span className="text-cyan-400">Input:</span> PDF/Excel/Portal del cuestionario + compliance graph + evidence store</div>
              <div><span className="text-cyan-400">Procesamiento:</span> NLP para extraer preguntas → RAG sobre evidence store → LLM genera respuesta draft con citas a evidencia → confidence scoring por respuesta</div>
              <div><span className="text-cyan-400">Decisión:</span> Auto-aprobar si confidence &gt;0.9 Y evidencia verificable. Escalar a humano si &lt;0.9 o si pregunta es subjetiva.</div>
              <div><span className="text-cyan-400">Output:</span> Cuestionario completado con respuestas + evidencias linkeadas + flags para revisión humana</div>
              <div><span className="text-cyan-400">Feedback:</span> Correcciones humanas → fine-tuning de prompts + actualización de answer library</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">4. AI System Classifier (RAG + Agent)</h4>
            <div className="text-sm text-slate-300 space-y-2">
              <div><span className="text-cyan-400">Input:</span> Descripción del sistema AI del usuario (propósito, datos, usuarios, decisiones)</div>
              <div><span className="text-cyan-400">Procesamiento:</span> Agent que consulta AI Act annexes (via RAG) + clasifica riesgo (prohibido/alto/limitado/mínimo) + identifica obligaciones aplicables</div>
              <div><span className="text-cyan-400">Decisión:</span> Clasificación de riesgo con explicación regulatoria</div>
              <div><span className="text-cyan-400">Output:</span> Report de clasificación + checklist de obligaciones + timeline de cumplimiento</div>
              <div><span className="text-cyan-400">Feedback:</span> HITL obligatorio — la clasificación final siempre requiere aprobación humana (riesgo legal)</div>
            </div>
          </div>
          
          <div className="bg-slate-700/30 border border-rose-500/20 rounded-xl p-6">
            <h4 className="text-rose-400 font-semibold mb-3">⚠️ Principios de diseño IA</h4>
            <ul className="text-sm text-slate-300 space-y-2">
              <li className="flex gap-2"><span className="text-rose-400">•</span> <strong>Nunca autonomía irreversible:</strong> La IA sugiere, el humano decide. Especialmente en clasificación AI Act y respuestas a cuestionarios legales.</li>
              <li className="flex gap-2"><span className="text-rose-400">•</span> <strong>Confidence thresholds:</strong> Auto-acción solo con evidencia verificable + alta confianza. Escalado a humano en ambigüedad.</li>
              <li className="flex gap-2"><span className="text-rose-400">•</span> <strong>Sin alucinación en claims:</strong> Cada claim de compliance DEBE linkear a evidencia técnica real. Si no hay evidencia → "No verificado" (nunca inventar).</li>
              <li className="flex gap-2"><span className="text-rose-400">•</span> <strong>Fallback determinista:</strong> Si LLM falla o no está disponible, el sistema funciona con reglas pre-construidas (ontology-based matching).</li>
              <li className="flex gap-2"><span className="text-rose-400">•</span> <strong>Memoria:</strong> Answer library acumulativa por tenant. No compartir entre tenants. Retención según política de datos.</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-3">Stack de IA</h4>
            <div className="text-sm text-slate-300 space-y-2">
              <div><span className="text-emerald-400">RAG:</span> Vector DB (pgvector) con textos regulatorios actualizados + control ontology</div>
              <div><span className="text-emerald-400">LLM:</span> Claude/GPT-4 para generación de respuestas + clasificación semántica</div>
              <div><span className="text-emerald-400">Agentes:</span> LangGraph para flujos multi-step (classify → obligations → checklist)</div>
              <div><span className="text-emerald-400">Determinista:</span> Control ontology (grafo Neo4j) + reglas de matching para overlap conocido</div>
              <div><span className="text-emerald-400">HITL:</span> Queue de revisión humana con SLA. Dashboard para expertos internos.</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Business Section
function BusinessSection() {
  return (
    <Section id="business" title="Modelo de Negocio + Distribución" dark>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">ICP (Ideal Customer Profile)</h4>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-4">
            <div>
              <div className="text-emerald-400 text-xs font-medium uppercase">Pagador</div>
              <div className="text-slate-200 text-sm">CTO/VP Engineering de SaaS B2B europeo (10-200 empleados) que vende a enterprise. Trigger: primer cuestionario de seguridad que bloquea un deal.</div>
            </div>
            <div>
              <div className="text-cyan-400 text-xs font-medium uppercase">Usuario primario</div>
              <div className="text-slate-200 text-sm">Engineering Manager / DevOps Lead que debe responder cuestionarios y mantener controles. No es security expert.</div>
            </div>
            <div>
              <div className="text-amber-400 text-xs font-medium uppercase">Usuario secundario</div>
              <div className="text-slate-200 text-sm">CEO/Founder que necesita el trust center para cerrar deals. Sales team que usa evidencia para desbloquear procurement.</div>
            </div>
            <div>
              <div className="text-rose-400 text-xs font-medium uppercase">Vertical inicial</div>
              <div className="text-slate-200 text-sm">SaaS B2B en EU (DACH, Benelux, Nordics, France, Spain) que usa AI en producto y vende a mid-market/enterprise.</div>
            </div>
          </div>
          
          <h4 className="text-white font-semibold text-lg mb-4 mt-8">Pricing</h4>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
              <div className="text-slate-400 text-xs mb-1">Starter</div>
              <div className="text-2xl font-bold text-white">€199</div>
              <div className="text-slate-400 text-xs">/mes</div>
              <div className="text-slate-500 text-xs mt-2">1-25 empleados. 1 framework. Questionnaire auto-responder básico.</div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center relative">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-900 text-xs font-bold px-2 py-0.5 rounded">Popular</div>
              <div className="text-emerald-400 text-xs mb-1">Growth</div>
              <div className="text-2xl font-bold text-white">€449</div>
              <div className="text-slate-400 text-xs">/mes</div>
              <div className="text-slate-500 text-xs mt-2">25-100 empleados. Todos los frameworks. AI classifier. Trust center.</div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
              <div className="text-slate-400 text-xs mb-1">Scale</div>
              <div className="text-2xl font-bold text-white">€899</div>
              <div className="text-slate-400 text-xs">/mes</div>
              <div className="text-slate-500 text-xs mt-2">100-200 empleados. Multi-entity. API. Dedicated support. SLA.</div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Distribución / CAC Loop</h4>
          <div className="space-y-4">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <div className="text-emerald-400 text-sm font-medium mb-1">1. Content-led (mes 1-6)</div>
              <div className="text-slate-300 text-xs">Blog técnico sobre "cómo responder cuestionario NIS2", "AI Act para SaaS", "GDPR+AI Act overlap". SEO para queries de founders en pánico. Gratis tools (checklist generator, risk classifier).</div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <div className="text-cyan-400 text-sm font-medium mb-1">2. Community / Partnerships (mes 3-12)</div>
              <div className="text-slate-300 text-xs">Integración con abogados tech (ellos recomiendan a clientes PYME). Partnerships con aceleradoras (YC Europe, Station F). Comunidades de founders SaaS EU.</div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <div className="text-amber-400 text-sm font-medium mb-1">3. Product-led growth (mes 6+)</div>
              <div className="text-slate-300 text-xs">Free tier: "Scan your compliance in 5 min" → muestra gaps → upgrade para remediar. Trust center público genera referral (clientes enterprise ven el trust center y preguntan "¿qué usáis?").</div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <div className="text-rose-400 text-sm font-medium mb-1">4. Canal enterprise pull (mes 12+)</div>
              <div className="text-slate-300 text-xs">Empresas enterprise que reciben trust centers verificables de sus vendors empiezan a preferir TrustLayer. Push desde buyer side.</div>
            </div>
          </div>
          
          <h4 className="text-white font-semibold text-lg mb-4 mt-8">Unit Economics (a validar)</h4>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-slate-400 text-xs">ACV target (Growth plan)</div>
                <div className="text-white font-medium">€5,388/año</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">CAC target</div>
                <div className="text-white font-medium">&lt;€1,500 (PLG + content)</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">Gross margin</div>
                <div className="text-white font-medium">~75% (SaaS + IA costs)</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">LTV:CAC target</div>
                <div className="text-white font-medium">&gt;4:1 (retención 3+ años)</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">Payback period</div>
                <div className="text-white font-medium">&lt;6 meses</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">Net Revenue Retention</div>
                <div className="text-white font-medium">&gt;120% (expansión por frameworks)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Architecture Section
function ArchitectureSection() {
  return (
    <Section id="architecture" title="Arquitectura Técnica">
      <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-6 mb-8">
        <h4 className="text-white font-semibold mb-4">Stack Mínimo</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="text-emerald-400 text-xs font-medium uppercase">Frontend</div>
            <div className="text-slate-300 text-sm">Next.js 14 (App Router) + Tailwind + shadcn/ui. Dashboard responsive. Trust center público como subdomain.</div>
          </div>
          <div className="space-y-2">
            <div className="text-cyan-400 text-xs font-medium uppercase">Backend / API</div>
            <div className="text-slate-300 text-sm">Node.js (Hono/Fastify) o Python (FastAPI). Workers para evidence collection. Queue system (BullMQ/Cloud Tasks).</div>
          </div>
          <div className="space-y-2">
            <div className="text-amber-400 text-xs font-medium uppercase">Base de datos</div>
            <div className="text-slate-300 text-sm">PostgreSQL (datos transaccionales) + pgvector (embeddings RAG) + Neo4j (compliance graph) + S3-compatible (evidence objects).</div>
          </div>
          <div className="space-y-2">
            <div className="text-rose-400 text-xs font-medium uppercase">IA / ML</div>
            <div className="text-slate-300 text-sm">LangGraph para agentes. Claude API / GPT-4 para generación. Embeddings (OpenAI/Cohere) para RAG. Fine-tuned classifier para AI Act risk.</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="space-y-2">
            <div className="text-purple-400 text-xs font-medium uppercase">Auth</div>
            <div className="text-slate-300 text-sm">Clerk o Auth0. Multi-tenant con row-level security. SSO para plan Scale. RBAC (admin, viewer, auditor).</div>
          </div>
          <div className="space-y-2">
            <div className="text-pink-400 text-xs font-medium uppercase">Pagos</div>
            <div className="text-slate-300 text-sm">Stripe (EU entity). Usage-based billing opcional. Invoice para enterprise. SEPA para EU customers.</div>
          </div>
          <div className="space-y-2">
            <div className="text-indigo-400 text-xs font-medium uppercase">Observabilidad</div>
            <div className="text-slate-300 text-sm">Datadog / Grafana Cloud. OpenTelemetry. Error tracking (Sentry). Audit log inmutable para compliance.</div>
          </div>
          <div className="space-y-2">
            <div className="text-teal-400 text-xs font-medium uppercase">Cloud</div>
            <div className="text-slate-300 text-sm">AWS EU (Frankfurt) o Hetzner (EU sovereignty). Kubernetes (Fly.io / Railway para MVP). CDN Cloudflare.</div>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-6">
          <h4 className="text-white font-semibold mb-3">Multi-tenancy + Security</h4>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• <strong>Least privilege:</strong> Cada tenant con schema aislado en PostgreSQL. Service accounts con permisos mínimos por integration.</li>
            <li>• <strong>Cifrado:</strong> At-rest (AES-256, keys managed por tenant). In-transit (TLS 1.3). Evidence objects cifados con keys del tenant.</li>
            <li>• <strong>Rate limits:</strong> Por tenant + per-endpoint. Anti-abuse en questionnaire responder (máx 50/mes en Starter).</li>
            <li>• <strong>Backups:</strong> Point-in-time recovery (PITR) 30 días. Cross-region backup. RTO &lt;1h, RPO &lt;5min.</li>
            <li>• <strong>Rollback:</strong> Schema migrations reversibles. Feature flags para deploy seguro. Canary releases.</li>
            <li>• <strong>Degradación segura:</strong> Si LLM no disponible → fallback a reglas deterministas. Si evidence collector falla → último estado conocido + alerta.</li>
          </ul>
        </div>
        
        <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-6">
          <h4 className="text-white font-semibold mb-3">Diagrama conceptual</h4>
          <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-slate-300 overflow-x-auto">
            <pre>{`┌─────────────────────────────────────────────────┐
│                   TRUSTLAYER                     │
├─────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │ Dashboard │  │  Trust   │  │  Questionnaire│  │
│  │  (React)  │  │  Center  │  │   Responder   │  │
│  └─────┬────┘  └────┬─────┘  └──────┬───────┘  │
│        │             │               │           │
│  ┌─────▼─────────────▼───────────────▼───────┐  │
│  │           API Gateway (Hono)               │  │
│  │     Auth │ Rate Limit │ Audit Log          │  │
│  └─────┬─────────────┬───────────────┬───────┘  │
│        │             │               │           │
│  ┌─────▼────┐  ┌─────▼─────┐  ┌─────▼──────┐  │
│  │ Compliance│  │ Evidence  │  │  AI Engine  │  │
│  │  Graph    │  │ Collector │  │ (LangGraph) │  │
│  │ (Neo4j)   │  │ (Workers) │  │ + RAG       │  │
│  └─────┬────┘  └─────┬─────┘  └─────┬──────┘  │
│        │             │               │           │
│  ┌─────▼─────────────▼───────────────▼───────┐  │
│  │     PostgreSQL + pgvector + S3             │  │
│  │     (Tenant-isolated, encrypted)           │  │
│  └───────────────────────────────────────────┘  │
│                                                   │
│  Integrations: GitHub │ AWS │ Azure │ Okta │ ... │
└─────────────────────────────────────────────────┘`}</pre>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Compliance Section
function ComplianceSection() {
  return (
    <Section id="compliance" title="Privacidad / Regulación / Seguridad" dark>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h4 className="text-white font-semibold mb-4">Jurisdicciones relevantes</h4>
          <div className="space-y-3 text-sm text-slate-300">
            <div>
              <div className="text-emerald-400 font-medium">UE (mercado primario)</div>
              <div className="text-xs mt-1">GDPR (vigente), AI Act (parcialmente vigente, full enforcement Ago 2026), NIS2 (vigente desde Dic 2025), Cyber Resilience Act (SBOM obligatorio Dic 2027), ePrivacy Directive.</div>
            </div>
            <div>
              <div className="text-cyan-400 font-medium">UK (mercado secundario)</div>
              <div className="text-xs mt-1">UK GDPR, proposed AI regulation (pro-innovation approach), Network and Information Systems Regulations 2022.</div>
            </div>
            <div>
              <div className="text-amber-400 font-medium">EEUU (futuro, si expande)</div>
              <div className="text-xs mt-1">SOC2 (market requirement, no ley). State-level AI laws (Colorado, California). [NO VERIFICADO: estado actual de federal AI legislation 2026]</div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h4 className="text-white font-semibold mb-4">Compliance-by-design</h4>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex gap-2">
              <span className="text-emerald-400">✓</span>
              <div><strong>Data minimization:</strong> Solo recopilamos datos técnicos necesarios para evidencias de controles. No datos personales de usuarios finales del cliente.</div>
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-400">✓</span>
              <div><strong>Consentimiento:</strong> DPA (Data Processing Agreement) con cada cliente. Base legal: ejecución de contrato + legitimate interest para security.</div>
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-400">✓</span>
              <div><strong>Retención limitada:</strong> Evidence objects retenidos según política del cliente (default: 3 años para audit trail). Borrado seguro al churn.</div>
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-400">✓</span>
              <div><strong>Trazabilidad:</strong> Audit log inmutable de todas las acciones. Who did what, when, with what evidence.</div>
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-400">✓</span>
              <div><strong>Controles humanos:</strong> Toda clasificación AI Act requiere aprobación humana. Toda respuesta a cuestionario legal revisable.</div>
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-400">✓</span>
              <div><strong>DPO:</strong> Data Protection Officer designado. Registro de procesamiento maintenido. DPIA para AI features.</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-slate-800 border border-amber-500/20 rounded-xl p-6">
        <h4 className="text-amber-400 font-semibold mb-3">⚠️ Regulación aplicable al propio producto</h4>
        <div className="grid sm:grid-cols-3 gap-4 text-sm text-slate-300">
          <div>
            <div className="text-white font-medium text-xs mb-1">Como "deployer" de IA</div>
            <div className="text-xs">TrustLayer usa IA para responder cuestionarios y clasificar sistemas. Debe cumplir obligaciones de transparencia AI Act (Art. 50) y evaluar si su propio uso es "limited risk".</div>
          </div>
          <div>
            <div className="text-white font-medium text-xs mb-1">Como procesador de datos</div>
            <div className="text-xs">Procesa datos técnicos del cliente (configs, logs). Debe cumplir Art. 28 GDPR. Sub-procesadores (LLM providers) deben ser declarados y aprobados.</div>
          </div>
          <div>
            <div className="text-white font-medium text-xs mb-1">[NO VERIFICADO]</div>
            <div className="text-xs">Si TrustLayer da "consejo" regulatorio automatizado, ¿cae bajo regulación de asesoría legal? Necesita validación legal. Mitigación: siempre framing como "guidance" no "legal advice".</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Risks Section
function RisksSection() {
  const risks = [
    { risk: 'Alucinación en respuestas a cuestionarios', prob: 'Media', impact: 'Alto', signal: 'Respuesta con confidence <0.7 o sin evidencia linkeada', mitigation: 'Nunca auto-enviar sin evidencia verificable. HITL obligatorio para respuestas legales. Fallback: "No podemos confirmar esto" es mejor que inventar.', fallback: 'Marcar como "requiere revisión humana" + notificar al usuario.' },
    { risk: 'Regulación cambia y invalida mapeos', prob: 'Alta', impact: 'Medio', signal: 'Publicación de guidelines de la Comisión Europea / enmiendas legislativas', mitigation: 'Equipo legal/partner que monitorea cambios. Actualización de ontology en <2 semanas. Alertar a clientes de cambios relevantes.', fallback: 'Modo "regulación en transición" con disclaimer claro.' },
    { risk: 'Dependencia de LLM providers (coste/latencia)', prob: 'Media', impact: 'Medio', signal: 'Aumento de precios API >30% o degradación de SLA', mitigation: 'Multi-provider (Claude + GPT + open-source fallback). Modelos fine-tuned pequeños para tareas rutinarias. Cache agresivo.', fallback: 'Motor determinista basado en ontology cubre 60% de casos sin LLM.' },
    { risk: 'Cold start: sin clientes, sin data para mejorar', prob: 'Alta', impact: 'Alto', signal: 'Primeros 50 clientes con baja accuracy en questionnaire responder', mitigation: 'Design partners (5-10 PYMEs EU) con acceso gratuito a cambio de feedback intensivo. Answer library inicial basada en patrones conocidos.', fallback: 'Concierge MVP: equipo humano responde cuestionarios manualmente mientras se entrena el sistema.' },
    { risk: 'Competidor enterprise (Vanta/Drata) lanza versión SME', prob: 'Media', impact: 'Alto', signal: 'Anuncio de producto, pricing <€500/mes, cobertura EU AI Act', mitigation: 'Velocidad: ser primero en convergencia multi-framework. Profundidad EU (no solo SOC2). Trust verificable como diferenciador.', fallback: 'Pivotar a nicho específico (AI-native SaaS) donde la especialización EU+AI es insuperable.' },
    { risk: 'Falso sentido de seguridad en clientes', prob: 'Media', impact: 'Alto', signal: 'Cliente deja de revisar respuestas auto-generadas', mitigation: 'UI que fuerza revisión de respuestas con confidence <0.95. Disclaimer legal claro. Audit trail de quién aprobó qué.', fallback: 'Terms of service: TrustLayer es herramienta de asistencia, no sustituye asesoría legal profesional.' },
    { risk: 'Exfiltración de datos del cliente via LLM', prob: 'Baja', impact: 'Crítico', signal: 'Configuración incorrecta que envía datos a LLM sin anonymization', mitigation: 'Zero data-retention con LLM providers. Anonymization antes de enviar a API. SOC2 propio como demostración. Pen testing anual.', fallback: 'Modo "on-premise LLM" para clientes con requisitos estrictos (modelo open-source deployado en su infra).' },
  ];

  return (
    <Section id="risks" title="Red Team: Top Riesgos + Defensas">
      <div className="space-y-4">
        {risks.map((r, i) => (
          <div key={i} className="bg-slate-700/30 border border-slate-600 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h4 className="text-white font-medium text-sm">{r.risk}</h4>
              <div className="flex gap-2 flex-shrink-0">
                <span className={`text-xs px-2 py-0.5 rounded ${r.prob === 'Alta' ? 'bg-rose-500/20 text-rose-300' : r.prob === 'Media' ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'}`}>
                  P: {r.prob}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded ${r.impact === 'Crítico' ? 'bg-rose-500/20 text-rose-300' : r.impact === 'Alto' ? 'bg-orange-500/20 text-orange-300' : 'bg-amber-500/20 text-amber-300'}`}>
                  I: {r.impact}
                </span>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 text-xs">
              <div>
                <div className="text-cyan-400 font-medium mb-1">Señal de detección</div>
                <div className="text-slate-300">{r.signal}</div>
              </div>
              <div>
                <div className="text-emerald-400 font-medium mb-1">Mitigación</div>
                <div className="text-slate-300">{r.mitigation}</div>
              </div>
              <div>
                <div className="text-amber-400 font-medium mb-1">Fallback</div>
                <div className="text-slate-300">{r.fallback}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// MVP Section
function MVPSection() {
  return (
    <Section id="mvp" title="MVP 30 Días + Métricas" dark>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Experimento de validación</h4>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-4">
            <div className="border-b border-slate-700 pb-4">
              <div className="text-emerald-400 text-xs font-medium uppercase mb-1">Semana 1-2: Smoke test</div>
              <div className="text-slate-300 text-sm">
                Landing page + "Compliance Scanner" gratuito (form que pide URL + stack tech → genera mini-report de gaps GDPR/AI Act/NIS2). Medir: signups, completion rate, "would you pay for this?"
              </div>
            </div>
            <div className="border-b border-slate-700 pb-4">
              <div className="text-cyan-400 text-xs font-medium uppercase mb-1">Semana 2-3: Concierge MVP</div>
              <div className="text-slate-300 text-sm">
                10 design partners (SaaS EU que están en proceso de compliance). Equipo responde 3 cuestionarios de cada uno manualmente mientras se construye la tool. Validar: tiempo ahorrado, accuracy, willingness to pay.
              </div>
            </div>
            <div className="border-b border-slate-700 pb-4">
              <div className="text-amber-400 text-xs font-medium uppercase mb-1">Semana 3-4: Wizard of Oz</div>
              <div className="text-slate-300 text-sm">
                Dashboard funcional que muestra compliance graph + gaps (construido manualmente para cada partner). Questionnaire responder semi-automático (LLM draft + revisión humana interna). Medir: NPS, tiempo de respuesta vs. baseline.
              </div>
            </div>
            <div>
              <div className="text-rose-400 text-xs font-medium uppercase mb-1">Semana 4: GO/ITERATE/STOP</div>
              <div className="text-slate-300 text-sm">
                Decisión basada en métricas. Si ≥6 de 10 partners dicen "pagaría €X/mes" Y el tiempo de respuesta se redujo &gt;50% → GO. Si mixed → ITERATE con pivot. Si &lt;3 pagarían → STOP y reformular.
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Métricas clave</h4>
          <div className="space-y-4">
            <div className="bg-slate-800 border border-emerald-500/20 rounded-xl p-4">
              <div className="text-emerald-400 text-xs font-medium uppercase mb-2">North Star Metric</div>
              <div className="text-white font-medium">"Questionnaires resolved per week per customer"</div>
              <div className="text-slate-400 text-xs mt-1">Si los clientes resuelven cuestionarios con TrustLayer, significa que están recibiendo valor real en el momento de dolor.</div>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <div className="text-cyan-400 text-xs font-medium uppercase mb-2">Activación</div>
              <div className="text-slate-300 text-sm">% de signups que completan onboarding (conectan ≥1 integration) en 48h.</div>
              <div className="text-white font-medium mt-1">Target: &gt;40%</div>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <div className="text-amber-400 text-xs font-medium uppercase mb-2">Retención (D30)</div>
              <div className="text-slate-300 text-sm">% de clientes que siguen activos a 30 días (login + al menos 1 acción de valor).</div>
              <div className="text-white font-medium mt-1">Target: &gt;70%</div>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <div className="text-rose-400 text-xs font-medium uppercase mb-2">Intención de pago</div>
              <div className="text-slate-300 text-sm">% de design partners que firman LOI o pagan piloto después del experimento.</div>
              <div className="text-white font-medium mt-1">Target: &gt;60% (6 de 10)</div>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <div className="text-purple-400 text-xs font-medium uppercase mb-2">Velocidad de respuesta</div>
              <div className="text-slate-300 text-sm">Tiempo medio para completar un cuestionario de seguridad con TrustLayer vs. baseline manual.</div>
              <div className="text-white font-medium mt-1">Target: reducción {'>'}50% (de 20h a {'<'}10h)</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Moat Section
function MoatSection() {
  return (
    <Section id="moat" title="Moat y Expansión">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Ventajas acumulativas</h4>
          <div className="space-y-4">
            <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-4">
              <div className="text-emerald-400 text-sm font-medium mb-1">1. Data moat (compliance graph)</div>
              <div className="text-slate-300 text-xs">Cada cliente que mapea sus controles enriquece la ontology de overlap entre frameworks. Con 500 clientes, tenemos el mapa más completo de "qué control satisface qué framework" para PYMEs EU. Imposible de replicar sin los datos.</div>
            </div>
            <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-4">
              <div className="text-cyan-400 text-sm font-medium mb-1">2. Workflow lock-in</div>
              <div className="text-slate-300 text-xs">Una vez que el trust center público está activo y los clientes lo comparten con buyers, migrar significa perder la señal de confianza acumulada + evidence history. Switching cost alto.</div>
            </div>
            <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-4">
              <div className="text-amber-400 text-sm font-medium mb-1">3. Integration depth</div>
              <div className="text-slate-300 text-xs">Cuanto más conectado al stack del cliente (GitHub, cloud, IdP, HR), más evidencia automática y más difícil de reemplazar. Efecto redverso: más integraciones → más valor → más clientes → más integraciones.</div>
            </div>
            <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-4">
              <div className="text-rose-400 text-sm font-medium mb-1">4. Answer library (network effect indirecto)</div>
              <div className="text-slate-300 text-xs">Las respuestas a cuestionnaires (anónimas/agregadas) crean una base de conocimiento que mejora para todos. El 1000º cliente recibe mejores respuestas que el 1º.</div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Expansión</h4>
          <div className="space-y-3">
            <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-4">
              <div className="text-white text-sm font-medium">Fase 1 (Y1): EU SaaS + GDPR+AI Act+NIS2+SOC2</div>
              <div className="text-slate-400 text-xs">Nicho claro, dolor agudo, willingness to pay demostrada.</div>
            </div>
            <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-4">
              <div className="text-white text-sm font-medium">Fase 2 (Y2): + ISO 27001 + HIPAA + CRA</div>
              <div className="text-slate-400 text-xs">Expandir frameworks. Cross-sell a clientes existentes. Aumentar ACV.</div>
            </div>
            <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-4">
              <div className="text-white text-sm font-medium">Fase 3 (Y2-3): Marketplace de auditores</div>
              <div className="text-slate-400 text-xs">Conectar clientes con auditores independientes verificados. Revenue share. Resolver el problema de independencia post-Delve.</div>
            </div>
            <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-4">
              <div className="text-white text-sm font-medium">Fase 4 (Y3+): Compliance API para platforms</div>
              <div className="text-slate-400 text-xs">Marketplaces (AWS, Azure, Stripe) que quieren verificar compliance de sus vendors automáticamente. B2B2B.</div>
            </div>
            <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-4">
              <div className="text-white text-sm font-medium">Fase 5 (Y4+): US + Asia-Pacific</div>
              <div className="text-slate-400 text-xs">Adaptar a marcos regulatorios no-EU. SOC2-first para US. La base de evidence collection y questionnaire responder es portable.</div>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-2">3 razones por las que podría fracasar</h4>
            <ol className="text-sm text-slate-300 space-y-2">
              <li><strong className="text-rose-300">1.</strong> <strong>Regulación se simplifica:</strong> Si la UE simplifica AI Act para PYMEs (como propone Digital Omnibus), el dolor disminuye y la willingness to pay cae. Mitigación: diversificar frameworks para no depender de uno solo.</li>
              <li><strong className="text-rose-300">2.</strong> <strong>Vanta/Drata bajan precios:</strong> Si los incumbents lanzan un plan "SME" a €200/mes con cobertura EU, nuestra ventaja de pricing desaparece. Mitigación: la convergencia multi-framework + evidence verificable es el diferenciador, no el precio.</li>
              <li><strong className="text-rose-300">3.</strong> <strong>PYMEs siguen ignorando compliance:</strong> Si la enforcement de NIS2/AI Act es débil y las multas no se aplican, las PYMEs no sienten urgencia. Mitigación: el trigger real es el bloqueo de deals enterprise, no las multas. Mientras enterprise exija compliance, hay dolor.</li>
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Next Action Section
function NextActionSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-cyan-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Próxima Acción Concreta</h2>
        <div className="bg-slate-800/80 border border-emerald-500/30 rounded-2xl p-8">
          <div className="text-left space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 text-xs font-bold">1</span>
              </div>
              <div className="text-slate-200 text-sm">
                <strong className="text-white">Esta semana:</strong> Construir landing page + "Compliance Scanner" tool (form → mini-report generado con LLM + RAG sobre textos regulatorios). Objetivo: 100 signups en 2 semanas.
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 text-xs font-bold">2</span>
              </div>
              <div className="text-slate-200 text-sm">
                <strong className="text-white">Semana 2:</strong> Reclutar 10 design partners de comunidades SaaS EU (IndieHackers EU, SaaS EU Slack, LinkedIn). Ofrecer compliance scan gratuito + entrevista de 30 min para entender su dolor exacto.
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 text-xs font-bold">3</span>
              </div>
              <div className="text-slate-200 text-sm">
                <strong className="text-white">Semana 3-4:</strong> Concierge MVP: responder manualmente 3 cuestionarios por partner. Medir tiempo, accuracy, satisfacción. Validar willingness to pay con pregunta directa + LOI.
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 text-xs font-bold">4</span>
              </div>
              <div className="text-slate-200 text-sm">
                <strong className="text-white">Día 30:</strong> Decisión GO/ITERATE/STOP basada en datos. Si GO → construir MVP técnico (compliance graph + evidence collector + questionnaire responder) en 8 semanas con equipo de 2-3 personas.
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-700">
            <div className="text-slate-400 text-xs">
              <strong className="text-slate-300">Inversión requerida para MVP 30 días:</strong> 1 founder full-time + €500 en herramientas (hosting, LLM APIs, design). Sin necesidad de funding externo para validar.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
            <span className="text-slate-900 font-bold text-xs">TL</span>
          </div>
          <span className="text-slate-300 font-medium text-sm">TrustLayer</span>
        </div>
        <p className="text-slate-500 text-xs max-w-lg mx-auto">
          Venture Architecture Document. Análisis de oportunidad de producto basado en investigación de mercado realizada en 2026. 
          Las cifras marcadas como [NO VERIFICADO] requieren validación adicional antes de tomar decisiones de inversión.
        </p>
        <div className="mt-4 text-slate-600 text-xs">
          Metodología: Need Discovery → Anti-App Filter → Validación → Producto → IA → Negocio → Arquitectura → Compliance → Red Team → MVP
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <ThesisSection />
      <NeedSection />
      <EvidenceSection />
      <ProductSection />
      <AIEngineSection />
      <BusinessSection />
      <ArchitectureSection />
      <ComplianceSection />
      <RisksSection />
      <MVPSection />
      <MoatSection />
      <NextActionSection />
      <Footer />
    </div>
  );
}
