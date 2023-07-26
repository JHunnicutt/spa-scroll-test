interface Props {
  heading: string;
  children?: React.ReactNode;
}

export default function Section({ heading, children }: Props) {
  return (
    <section className="flex h-full flex-col items-center justify-start pt-10">
      <h1 className="border-b-2 px-4 pb-1 text-3xl font-semibold uppercase text-white">
        {heading}
      </h1>
      <div>{children}</div>
    </section>
  );
}
