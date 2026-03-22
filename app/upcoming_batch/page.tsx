"use client";

import { useEffect, useState } from "react";
import { Trash2, PlusCircle, Pencil, Check, X } from "lucide-react";

interface Batch {
  id: string;
  date: string;
  days?: string;
  time?: string[];
  soldOut?: boolean;
}

const TIME_OPTIONS = [
  "9:00 am - 11:00 am",
  "11:00 am - 01:00 pm",
  "3:00 pm - 5:00 pm",
  "5:00 pm - 7:00 pm",
];

const DAY_OPTIONS = ["Sat & Sun", "Mon & Wed", "Tue & Thu", "Mon - Fri"];

type EditForm = {
  date: string;
  days: string;
  time: string[];
  soldOut: boolean;
};

export default function UpcomingBatchAdmin() {
  const [batches, setBatches] = useState<Batch[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<EditForm>({ date: "", days: "", time: [], soldOut: false });

  const [form, setForm] = useState({
    date: "",
    days: "",
    time: [] as string[],
    soldOut: false,
  });

  async function fetchBatches() {
    const res = await fetch("/api/batches");
    const data = await res.json();
    setBatches(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchBatches();
  }, []);

  function toggleTime(t: string) {
    setForm((f) => ({
      ...f,
      time: f.time.includes(t) ? f.time.filter((x) => x !== t) : [...f.time, t],
    }));
  }

  function toggleEditTime(t: string) {
    setEditForm((f) => ({
      ...f,
      time: f.time.includes(t) ? f.time.filter((x) => x !== t) : [...f.time, t],
    }));
  }

  function startEdit(batch: Batch) {
    setEditingId(batch.id);
    setEditForm({
      date: batch.date,
      days: batch.days ?? "",
      time: batch.time ?? [],
      soldOut: batch.soldOut ?? false,
    });
  }

  function cancelEdit() {
    setEditingId(null);
  }

  async function handleSaveEdit(id: string) {
    await fetch(`/api/batches/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    });
    setEditingId(null);
    await fetchBatches();
    setSuccess("Batch updated!");
    setTimeout(() => setSuccess(""), 2500);
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!form.date) return;
    setSaving(true);
    await fetch("/api/batches", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ date: "", days: "", time: [], soldOut: false });
    await fetchBatches();
    setSaving(false);
    setSuccess("Batch added!");
    setTimeout(() => setSuccess(""), 2500);
  }

  async function handleDelete(id: string) {
    await fetch(`/api/batches/${id}`, { method: "DELETE" });
    fetchBatches();
  }

  return (
    <div className="min-h-screen bg-[#F5F3F0] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Manage Upcoming Batches</h1>
        <p className="text-gray-500 text-sm mb-8">
          Changes here are instantly reflected on the main page.
        </p>

        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-3 rounded-lg">
            {success}
          </div>
        )}

        {/* Add Form */}
        <div className="bg-white rounded-2xl shadow p-6 mb-10">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-purple-600" /> Add New Batch
          </h2>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 10th June, 2026"
                value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Days</label>
              <div className="flex flex-wrap gap-2">
                {DAY_OPTIONS.map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => setForm((f) => ({ ...f, days: f.days === d ? "" : d }))}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium border transition ${
                      form.days === d
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-700 border-gray-300 hover:border-black"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time Slots</label>
              <div className="flex flex-wrap gap-2">
                {TIME_OPTIONS.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => toggleTime(t)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium border transition ${
                      form.time.includes(t)
                        ? "bg-purple-600 text-white border-purple-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-purple-400"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="soldOut"
                checked={form.soldOut}
                onChange={(e) => setForm((f) => ({ ...f, soldOut: e.target.checked }))}
                className="w-4 h-4 accent-purple-600"
              />
              <label htmlFor="soldOut" className="text-sm text-gray-700">
                Mark as Sold Out
              </label>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold disabled:opacity-50"
            >
              {saving ? "Saving..." : "Add Batch"}
            </button>
          </form>
        </div>

        {/* Existing Batches */}
        <h2 className="text-lg font-semibold mb-4">Current Batches</h2>
        {loading ? (
          <p className="text-gray-400 text-sm">Loading...</p>
        ) : batches.length === 0 ? (
          <p className="text-gray-400 text-sm">No batches yet.</p>
        ) : (
          <div className="space-y-3">
            {batches.map((batch) =>
              editingId === batch.id ? (
                /* ── Edit Mode ── */
                <div key={batch.id} className="bg-white border-2 border-purple-300 rounded-xl p-5 space-y-4">
                  <p className="text-sm font-semibold text-purple-600">Editing batch</p>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Date</label>
                    <input
                      type="text"
                      value={editForm.date}
                      onChange={(e) => setEditForm((f) => ({ ...f, date: e.target.value }))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Days</label>
                    <div className="flex flex-wrap gap-2">
                      {DAY_OPTIONS.map((d) => (
                        <button
                          type="button"
                          key={d}
                          onClick={() => setEditForm((f) => ({ ...f, days: f.days === d ? "" : d }))}
                          className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
                            editForm.days === d
                              ? "bg-black text-white border-black"
                              : "bg-white text-gray-700 border-gray-300 hover:border-black"
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Time Slots</label>
                    <div className="flex flex-wrap gap-2">
                      {TIME_OPTIONS.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => toggleEditTime(t)}
                          className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
                            editForm.time.includes(t)
                              ? "bg-purple-600 text-white border-purple-600"
                              : "bg-white text-gray-700 border-gray-300 hover:border-purple-400"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`soldOut-${batch.id}`}
                      checked={editForm.soldOut}
                      onChange={(e) => setEditForm((f) => ({ ...f, soldOut: e.target.checked }))}
                      className="w-4 h-4 accent-purple-600"
                    />
                    <label htmlFor={`soldOut-${batch.id}`} className="text-sm text-gray-700">
                      Sold Out
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSaveEdit(batch.id)}
                      className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-lg text-xs font-semibold"
                    >
                      <Check className="w-3.5 h-3.5" /> Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="flex items-center gap-1.5 border border-gray-300 text-gray-600 px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-gray-50"
                    >
                      <X className="w-3.5 h-3.5" /> Cancel
                    </button>
                  </div>
                </div>
              ) : (
                /* ── View Mode ── */
                <div
                  key={batch.id}
                  className={`flex items-start justify-between gap-4 p-4 rounded-xl border ${
                    batch.soldOut ? "bg-pink-50 border-pink-200" : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-sm">{batch.date}</span>
                      {batch.days && (
                        <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">
                          {batch.days}
                        </span>
                      )}
                      {batch.soldOut && (
                        <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full">
                          Sold Out
                        </span>
                      )}
                    </div>
                    {batch.time && (
                      <ul className="text-xs text-gray-500 mt-1 space-y-0.5">
                        {batch.time.map((t, i) => (
                          <li key={i}>• {t}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => startEdit(batch)}
                      className="flex items-center gap-1 text-xs border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-50 text-gray-600"
                    >
                      <Pencil className="w-3 h-3" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(batch.id)}
                      className="text-red-400 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
