'use client'
import React from "react";
import { motion } from "framer-motion";

type Member = { id: string; name: string; avatar?: string };

const members: Member[] = [
  { id: "1", name: "Asha" },
  { id: "2", name: "Ramesh" },
  { id: "3", name: "Baby" },
];

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">E</div>
          <div>
            <h1 className="text-lg font-semibold">Expenzo</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Family Expense Tracker</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <button className="text-sm px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Dashboard</button>
          <button className="text-sm px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Transactions</button>
          <button className="text-sm px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Members</button>
          <button className="ml-2 bg-indigo-600 text-white px-3 py-2 rounded-md shadow-sm hover:brightness-105">Quick Add</button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-6 items-center"
        >
          <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Keep family finances tidy — without the drama.</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Expenzo is a private, simple expense tracker built for families. Add expenses, split bills, and see who owes what at a glance.</p>

                <div className="mt-4 flex gap-3">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-sm">Get started</button>
                  <button className="border border-gray-200 px-4 py-2 rounded-lg">How it works</button>
                </div>
              </div>

              <div className="hidden md:block text-sm text-gray-500">
                <p className="font-medium">This household</p>
                <div className="mt-2 flex -space-x-2 items-center">
                  {members.map((m) => (
                    <div key={m.id} className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold border-2 border-white dark:border-gray-900">{m.name.charAt(0)}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary cards */}
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className="text-xs text-gray-500">This month</div>
                <div className="mt-1 text-xl font-bold">₹12,540</div>
                <div className="text-sm text-green-500">+8% from last month</div>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className="text-xs text-gray-500">Due</div>
                <div className="mt-1 text-xl font-bold">₹3,200</div>
                <div className="text-sm text-red-400">2 unpaid</div>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className="text-xs text-gray-500">Saved</div>
                <div className="mt-1 text-xl font-bold">₹5,000</div>
                <div className="text-sm text-gray-500">Emergency fund</div>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <aside className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md">
            <h3 className="text-sm font-semibold">Quick actions</h3>
            <div className="mt-3 flex flex-col gap-3">
              <button className="w-full text-left px-4 py-2 rounded-md border">Add expense</button>
              <button className="w-full text-left px-4 py-2 rounded-md border">Settle up</button>
              <button className="w-full text-left px-4 py-2 rounded-md border">Monthly report</button>
            </div>
          </aside>
        </motion.div>

        {/* Transaction preview */}
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Recent transactions</h3>
            <button className="text-sm px-3 py-2 border rounded-md">See all</button>
          </div>

          <div className="mt-4 grid gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center">🧾</div>
                  <div>
                    <div className="font-medium">Grocery — SuperMart</div>
                    <div className="text-xs text-gray-500">Paid by Asha • Split</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-semibold">-₹1,240</div>
                  <div className="text-xs text-gray-500">Today</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Family balance */}
        <section className="mt-10">
          <h3 className="text-lg font-semibold">Family balances</h3>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            {members.map((m) => (
              <div key={m.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">{m.name.charAt(0)}</div>
                    <div>
                      <div className="font-medium">{m.name}</div>
                      <div className="text-xs text-gray-500">member</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">₹{(Math.random() * 5000).toFixed(0)}</div>
                    <div className="text-xs text-gray-500">balance</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          Made with ❤️ for family use only • Private by default
        </footer>
      </main>
    </div>
  );
}
