import React from "react";

export function PolicyPage() {
  const policies = [
    {
      title: "Chính sách bảo mật thông tin",
      url: "https://trunghanh.com/pages/chinh-sach-bao-mat-thong-tin",
    },
    {
      title: "Chính sách bảo mật thông tin thanh toán",
      url: "https://trunghanh.com/pages/chinh-sach-bao-mat-thong-tin-thanh-toan",
    },
    {
      title: "Điều khoản giao dịch chung",
      url: "https://trunghanh.com/pages/dieu-khoan-giao-dich-chung",
    },
    {
      title: "Chính sách vận chuyển giao hàng",
      url: "https://trunghanh.com/pages/chinh-sach-van-chuyen-giao-hang",
    },
    {
      title: "Chính sách thanh toán",
      url: "https://trunghanh.com/pages/chinh-sach-thanh-toan",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md" role="region" aria-labelledby="policy-title">
      <h1 id="policy-title" className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Vui lòng đọc kỹ các thông tin sau:
      </h1>
      <ul className="space-y-3 list-disc list-inside">
        {policies.map((policy, index) => (
          <li key={index}>
            {policy.url ? (
              <a
                href={policy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Link to ${policy.title}`}
              >
                {policy.title}
              </a>
            ) : (
              <span className="text-gray-500">{policy.title} (Invalid URL)</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}