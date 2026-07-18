export function Footer() {
  return (
    <footer className="bg-primary py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-primary-foreground font-bold">
              受験戦略予備校WILL
            </p>
            <p className="text-primary-foreground/70 text-xs mt-1">
              浪人生専門 定員制オンライン予備校
            </p>
          </div>
          <p className="text-primary-foreground/70 text-sm">
            &copy; {new Date().getFullYear()} 受験戦略予備校WILL All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
