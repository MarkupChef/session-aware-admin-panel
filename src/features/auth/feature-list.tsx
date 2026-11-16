const FEATURES = [
  {
    title: 'Single-flight session rotation',
    description: 'Parallel 401 responses share one rotate request and each retries exactly once.',
  },
  {
    title: 'CSRF handling',
    description: 'Token fetched lazily, sent on POST/PUT, re-fetched and retried once on 419.',
  },
  {
    title: 'Mocked backend',
    description: 'MSW serves the API in the browser and in Vitest from the same handlers.',
  },
  {
    title: 'URL as state',
    description: 'List page and search live in the URL, validated with zod.',
  },
  {
    title: 'Typed boundaries',
    description: 'Every response is parsed by zod; errors normalize into one ApiError union.',
  },
] as const;

export function FeatureList() {
  return (
    <section aria-labelledby="features-heading" className="w-full max-w-sm">
      <h1 id="features-heading" className="font-heading text-2xl font-semibold">
        Session Rotation Demo
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Webhooks admin with a resilient session layer.
      </p>
      <ul className="mt-4 grid gap-3">
        {FEATURES.map((feature) => (
          <li key={feature.title} className="text-sm">
            <span className="font-semibold">{feature.title}</span>
            <span className="text-muted-foreground"> — {feature.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
