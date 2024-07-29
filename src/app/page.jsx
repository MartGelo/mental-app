/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oVNQM8yBGfB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-[#294969] min-h-[100dvh] flex flex-col">
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0077b6] mb-4">
          Empowering Student Mental Health
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-[800px] mb-8">
          Our Peer Support Program provides a safe and inclusive space for
          students to connect, share, and find support for their mental
          well-being.
        </p>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-[#0077b6] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#0077b6]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Join the Program
        </Link>
      </section>
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-[#0077b6] text-primary-foreground rounded-full p-4 mb-4">
            <UsersIcon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Peer Support</h3>
          <p className="text-muted-foreground">
            Connect with fellow students and find a supportive community to
            share your experiences and receive empathetic listening.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-[#0077b6] text-primary-foreground rounded-full p-4 mb-4">
            <BookOpenIcon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Mental Health Resources</h3>
          <p className="text-muted-foreground">
            Access a curated library of educational materials, self-care tips,
            and mental health information to support your well-being.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-[#0077b6] text-primary-foreground rounded-full p-4 mb-4">
            <HeadphonesIcon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Counseling Services</h3>
          <p className="text-muted-foreground">
            Receive confidential and professional counseling support from our
            team of licensed mental health practitioners.
          </p>
        </div>
      </section>
    </div>
  );
}

function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function HeadphonesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
