import React from "react";

export default function FAQ() {
  return (
    <div>
      <section className="text-textcolor bg-primary">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold rounded-md py-2 px-4">
                  How Long is this site live?
                </summary>
                <div className="px-4 py-2">
                  <p>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </p>
                </div>
              </details>
              <hr className="border-gray-600 my-2" />
              <details className="mb-4">
                <summary className="font-semibold rounded-md py-2 px-4">
                  Can I install/upload anything I want on there?
                </summary>
                <div className="px-4 py-2">
                  <p>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </p>
                </div>
              </details>
              <hr className="border-gray-600 my-2" />
              <details className="mb-4">
                <summary className="font-semibold rounded-md py-2 px-4">
                  How can I migrate to another site?
                </summary>
                <div className="px-4 py-2">
                  <p>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </p>
                </div>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold rounded-md py-2 px-4">
                  Can I change the domain you give me?
                </summary>
                <div className="px-4 py-2">
                  <p>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </p>
                </div>
              </details>
              <hr className="border-gray-600 my-2" />
              <details className="mb-4">
                <summary className="font-semibold rounded-md py-2 px-4">
                  How many sites can I create at once?
                </summary>
                <div className="px-4 py-2">
                  <p>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </p>
                </div>
              </details>
              <hr className="border-gray-600 my-2" />
              <details className="mb-4">
                <summary className="font-semibold rounded-md py-2 px-4">
                  How can I communicate with you?
                </summary>
                <div className="px-4 py-2">
                  <p>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
