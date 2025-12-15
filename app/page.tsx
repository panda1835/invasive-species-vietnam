"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SPECIES_LIST } from "./speciesList";

type Group =
  | "Vi sinh vật"
  | "Động vật không xương sống"
  | "Cá"
  | "Lưỡng cư – Bò sát"
  | "Chim – Thú"
  | "Thực vật";

type SpeciesImage = {
  url: string;
  author: string;
  license: string;
  source: string;
};

type Species = {
  group: Group;
  vietnameseName: string;
  scientificNames: string[];
  photos: SpeciesImage[] | [];
};

const GROUP_FILTERS: (Group | "Tất cả")[] = [
  "Tất cả",
  "Động vật không xương sống",
  "Cá",
  "Lưỡng cư – Bò sát",
  "Chim – Thú",
  "Thực vật",
  "Vi sinh vật",
];

const CATEGORY_ORDER: { key: Group; label: string }[] = [
  {
    key: "Động vật không xương sống",
    label: "Động vật không xương sống",
  },
  {
    key: "Cá",
    label: "Cá",
  },
  {
    key: "Lưỡng cư – Bò sát",
    label: "Lưỡng cư – Bò sát",
  },
  {
    key: "Chim – Thú",
    label: "Chim – Thú",
  },
  {
    key: "Thực vật",
    label: "Thực vật",
  },
  {
    key: "Vi sinh vật",
    label: "Vi sinh vật",
  },
];
export default function HomePage() {
  const [selectedGroup, setSelectedGroup] = useState<Group | "Tất cả">(
    "Tất cả"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSpecies, setActiveSpecies] = useState<Species | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showContributorModal, setShowContributorModal] = useState(false);

  const filteredSpecies = useMemo(() => {
    return SPECIES_LIST.filter((sp) => {
      const matchGroup =
        selectedGroup === "Tất cả" || sp.group === selectedGroup;

      const term = searchTerm.trim().toLowerCase();
      if (!term) return matchGroup;

      const vn = sp.vietnameseName.toLowerCase();
      const sci = sp.scientificNames.join(" ").toLowerCase();

      const matchSearch = vn.includes(term) || sci.includes(term);

      return matchGroup && matchSearch;
    });
  }, [selectedGroup, searchTerm]);

  const openLightbox = (species: Species) => {
    setActiveSpecies(species);
    setActiveImageIndex(0);
  };

  const closeLightbox = () => {
    setActiveSpecies(null);
    setActiveImageIndex(0);
  };

  const showPrevImage = () => {
    if (!activeSpecies) return;
    setActiveImageIndex((prev) => {
      const total = activeSpecies.photos.length;
      return (prev - 1 + total) % total;
    });
  };

  const showNextImage = () => {
    if (!activeSpecies) return;
    setActiveImageIndex((prev) => {
      const total = activeSpecies.photos.length;
      return (prev + 1) % total;
    });
  };

  const anyResult = filteredSpecies.length > 0;

  const categoriesToRender =
    selectedGroup === "Tất cả"
      ? CATEGORY_ORDER
      : CATEGORY_ORDER.filter((c) => c.key === selectedGroup);

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-stone-100 text-stone-900">
        {/* Header */}
        <header className="border-b border-amber-200 bg-amber-50/90 backdrop-blur">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-amber-950">
                Loài ngoại lai xâm hại ở Việt Nam
              </h1>
              <p className="mt-2  text-base text-stone-700">
                Loài ngoại lai xâm hại (Invasive Alien Species) là những sinh
                vật được du nhập từ bên ngoài phạm vi phân bố tự nhiên của chúng
                và gây tác động tiêu cực đến đa dạng sinh học, sức khỏe con
                người hoặc kinh tế – xã hội. Tại Việt Nam, danh mục chính thức
                đang được quy định trong Thông tư 35/2018/TT-BTNMT. Trang này
                cung cấp giao diện tra cứu trực quan, kèm hình ảnh minh họa và
                tên khoa học để hỗ trợ giáo dục, nghiên cứu và quản lý môi
                trường.
              </p>
            </div>
          </div>
        </header>

        {/* Controls */}
        <section className="mx-auto max-w-5xl px-4 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="search"
                className="mb-1 block text-sm font-medium uppercase tracking-wide text-stone-600"
              >
                Tìm kiếm
              </label>
              <div className="relative">
                <input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm theo tên Việt hoặc tên khoa học…"
                  className="w-full rounded-lg border border-amber-200 bg-amber-50/70 px-3 py-2.5 text-base shadow-sm outline-none ring-amber-500/50 placeholder:text-stone-400 focus:border-amber-500 focus:bg-amber-50 focus:ring"
                />
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-amber-400">
                  <Search size={20} />
                </span>
              </div>
            </div>

            {/* Group filters */}
            <div className="w-full sm:w-1/2">
              <p className="mb-1 text-sm font-medium uppercase tracking-wide text-stone-600">
                Nhóm loài
              </p>
              <div className="flex flex-wrap gap-2">
                {GROUP_FILTERS.map((group) => {
                  const isActive = group === selectedGroup;
                  return (
                    <button
                      key={group}
                      type="button"
                      onClick={() => setSelectedGroup(group)}
                      className={`rounded-full cursor-pointer border px-3 py-1.5 text-sm transition ${
                        isActive
                          ? "border-amber-700 bg-amber-800 text-amber-50 shadow-sm"
                          : "border-amber-200 bg-amber-50/80 text-amber-900 hover:border-amber-400 hover:bg-amber-100"
                      }`}
                    >
                      {group}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery grouped by category */}
        <section className="mx-auto max-w-5xl px-4 pb-10">
          {!anyResult ? (
            <p className="mt-6 text-base text-stone-600">
              Không tìm thấy loài nào phù hợp với điều kiện lọc hiện tại.
            </p>
          ) : (
            <div className="space-y-10">
              {categoriesToRender.map((cat) => {
                const speciesInCat = filteredSpecies.filter(
                  (sp) => sp.group === cat.key
                );
                if (speciesInCat.length === 0) {
                  return null;
                }

                return (
                  <section key={cat.key}>
                    {/* Category header */}
                    <div className="mb-4 flex flex-col gap-1 rounded-xl bg-amber-900 px-4 py-3 text-amber-50 shadow-sm border border-amber-900/70">
                      <h2 className="text-lg font-semibold tracking-wide">
                        {cat.label}
                      </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {speciesInCat.map((sp) => (
                        <button
                          key={sp.vietnameseName}
                          type="button"
                          onClick={() => openLightbox(sp as Species)}
                          className=" cursor-pointer overflow-hidden rounded-xl border border-amber-200 bg-amber-50 text-left shadow-sm transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-amber-400 hover:shadow-lg"
                        >
                          {/* Thumbnail */}
                          <div className="relative aspect-[4/3] bg-amber-100">
                            {sp.photos[0] ? (
                              <Image
                                unoptimized
                                src={sp.photos[0].url}
                                alt={`Ảnh của ${sp.vietnameseName}`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center text-sm text-stone-400">
                                Chưa có ảnh
                              </div>
                            )}
                          </div>

                          {/* Text info */}
                          <div className="flex flex-1 flex-col gap-1 p-3">
                            <h3 className="text-base font-semibold text-stone-900">
                              {sp.vietnameseName}
                            </h3>
                            <p className="text-sm italic text-stone-600">
                              {sp.scientificNames.join(" · ")}
                            </p>
                            <p className="mt-auto pt-2 text-xs text-stone-500">
                              {sp.photos.length} ảnh · bấm để xem chi tiết
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="border-t border-amber-200 bg-amber-50/90 py-6">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <button
              type="button"
              onClick={() => setShowContributorModal(true)}
              className="cursor-pointer underline text-sm text-amber-800 hover:text-amber-950 hover:underline transition-colors"
            >
              Cảm ơn những người đóng góp
            </button>
          </div>
        </footer>

        {/* Lightbox */}
        {activeSpecies && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <div
              className="relative mx-4 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-stone-950/95 text-amber-50 shadow-2xl ring-1 ring-amber-400/60"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute cursor-pointer right-3 top-3 z-10 rounded-full bg-stone-900/90 px-3 py-1 text-sm text-amber-50 shadow hover:bg-stone-800"
              >
                Đóng ✕
              </button>

              {/* Image area */}
              <div className="relative h-[50vh] w-full bg-stone-900">
                {activeSpecies.photos[activeImageIndex] && (
                  <Image
                    unoptimized
                    src={activeSpecies.photos[activeImageIndex].url}
                    alt={`Ảnh của ${activeSpecies.vietnameseName}`}
                    fill
                    className="object-contain"
                  />
                )}

                {/* Prev / Next arrows */}
                {activeSpecies.photos.length > 1 && (
                  <>
                    <button
                      onClick={showPrevImage}
                      className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 rounded-full bg-stone-900/80 px-3 py-2 text-lg text-amber-50 shadow hover:bg-stone-800"
                      aria-label="Ảnh trước"
                    >
                      ‹
                    </button>
                    <button
                      onClick={showNextImage}
                      className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 rounded-full bg-stone-900/80 px-3 py-2 text-lg text-amber-50 shadow hover:bg-stone-800"
                      aria-label="Ảnh sau"
                    >
                      ›
                    </button>
                    <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-stone-900/80 px-3 py-1 text-xs text-amber-50">
                      {activeImageIndex + 1}/{activeSpecies.photos.length}
                    </div>
                  </>
                )}
              </div>

              {/* Info area */}
              <div className="border-t border-stone-800 bg-stone-950/95 p-4 text-base">
                <p className="text-sm font-medium uppercase tracking-wide text-amber-300">
                  {
                    CATEGORY_ORDER.find((c) => c.key === activeSpecies.group)
                      ?.label
                  }
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-amber-50">
                  {activeSpecies.vietnameseName}
                </h2>
                <p className="mt-1 text-base italic text-amber-100">
                  {activeSpecies.scientificNames.join(" · ")}
                </p>

                {activeSpecies.photos[activeImageIndex] && (
                  <p className="mt-3 text-sm text-amber-100/90">
                    <span className="font-medium">Ảnh:</span>{" "}
                    {activeSpecies.photos[activeImageIndex].author}
                  </p>
                )}

                <p className="mt-3 text-xs text-amber-200/80">
                  Thông tin này chỉ mang tính tham khảo, không thay thế văn bản
                  pháp lý chính thức. Nên đối chiếu Thông tư 35/2018/TT-BTNMT và
                  các cập nhật mới nhất.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Contributor Modal */}
        {showContributorModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl"
            onClick={() => setShowContributorModal(false)}
          >
            <div
              className="relative mx-4 w-full max-w-md overflow-hidden rounded-2xl bg-amber-50 p-6 shadow-2xl ring-1 ring-amber-400/60"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowContributorModal(false)}
                className="absolute cursor-pointer right-3 top-3 rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-900 shadow hover:bg-amber-200"
              >
                Đóng ✕
              </button>

              {/* Content */}
              <div className="mt-2">
                <h2 className="text-2xl font-semibold text-amber-950 mb-4">
                  Cảm ơn các cộng tác viên
                </h2>
                <p className="text-base text-stone-700 mb-4">
                  Chúng tôi xin chân thành cảm ơn những người đã góp sức và tin
                  tưởng vào dự án này:
                </p>
                <ul className="space-y-2 text-stone-800">
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span>HA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span>Ben</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm text-stone-600">
                  Nếu bạn muốn đóng góp cho dự án, vui lòng liên hệ
                  lehoangphuc1820@gmail.com
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Animation CSS cho card (fade + nhẹ nhàng trồi lên) */}
      <style jsx global>{`
        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .card-fade {
          animation: cardFadeIn 0.4s ease-out both;
        }
      `}</style>
    </>
  );
}
