import React, { useState } from "react"

const Give = () => {
  const [activeTab, setActiveTab] = useState("mpesa")

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Partner With Us
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Your generous giving supports our mission to share the light of the
            gospel in Nakuru and beyond.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setActiveTab("mpesa")}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                activeTab === "mpesa"
                  ? "bg-green-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">📱</span>
                M-Pesa
              </span>
            </button>
            <button
              onClick={() => setActiveTab("bank")}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                activeTab === "bank"
                  ? "bg-purple-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">🏦</span>
                Bank Transfer
              </span>
            </button>
          </div>
        </div>

        {/* Payment Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* M-Pesa Card */}
          <div
            className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden transition-all duration-300 ${
              activeTab === "mpesa"
                ? "border-green-500 scale-[1.02]"
                : "border-transparent opacity-60 md:opacity-100"
            }`}
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Safaricom</p>
                  <h3 className="text-xl font-bold">M-Pesa Paybill</h3>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <p className="text-sm text-green-600 font-medium mb-1">
                    Business Number
                  </p>
                  <p className="text-3xl font-bold text-green-700 tracking-wider">
                    823343
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <p className="text-sm text-green-600 font-medium mb-1">
                    Account Number
                  </p>
                  <p className="text-lg font-bold text-green-700">
                    Tithe, Missions, Offerings
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    (Type as your account number)
                  </p>
                </div>
              </div>

              {/* Steps */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-700 mb-3">
                  How to pay:
                </p>
                <ol className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    Go to M-Pesa → Lipa na M-Pesa → Paybill
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    Enter Business No: <strong>823343</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    Enter Account No:{" "}
                    <strong>Tithe, Missions, or Offerings</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    Enter amount and your PIN
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Bank Card */}
          <div
            className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden transition-all duration-300 ${
              activeTab === "bank"
                ? "border-purple-500 scale-[1.02]"
                : "border-transparent opacity-60 md:opacity-100"
            }`}
          >
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Co-operative Bank</p>
                  <h3 className="text-xl font-bold">Bank Transfer</h3>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏦</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                  <p className="text-sm text-purple-600 font-medium mb-1">
                    Account Name
                  </p>
                  <p className="text-lg font-bold text-purple-700">
                    Africa Gospel Church Lake View AGC
                  </p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                  <p className="text-sm text-purple-600 font-medium mb-1">
                    Operations Account
                  </p>
                  <p className="text-2xl font-bold text-purple-700 tracking-wider">
                    01128354705500
                  </p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                  <p className="text-sm text-purple-600 font-medium mb-1">
                    Development Account
                  </p>
                  <p className="text-2xl font-bold text-purple-700 tracking-wider">
                    01128354705501
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scripture Quote */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 md:p-8 text-center text-white shadow-xl">
          <svg
            className="w-8 h-8 mx-auto mb-4 opacity-50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-lg md:text-xl font-light mb-4 leading-relaxed">
            "All the tithe of the land, whether of the seed of the land or of
            the fruit of trees, is the Lord's; it is holy to the Lord."
          </blockquote>
          <cite className="text-purple-200 font-medium">— Leviticus 27:30</cite>
        </div>

        {/* Additional Info */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">
            For any inquiries about giving, please contact the church office
          </p>
          <div className="inline-flex items-center gap-4 text-sm">
            <a
              href="tel:0797438190"
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0797438190
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="mailto:info@lakeviewagc.net"
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@lakeviewagc.net
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Give
