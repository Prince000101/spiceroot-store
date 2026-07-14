import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
          <h1 className="text-4xl font-playfair text-forest dark:text-cream">
            Something went wrong
          </h1>
          <p className="text-forest/70 dark:text-cream/60 font-dm">
            Please refresh the page or try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-full bg-forest px-6 py-3 text-sm text-cream font-dm font-medium hover:bg-forest-light transition"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
