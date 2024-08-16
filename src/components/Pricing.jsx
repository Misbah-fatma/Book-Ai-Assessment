import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const Pricing = () => {
  const { theme } = useTheme();

  return (
    <section
      id="pricing"
      className={`container mx-auto p-4 sm:p-8 mb-4 sm:mb-8 w-full max-w-4xl rounded-lg border ${
        theme === 'dark'
          ? 'bg-[#1E293B] border-[#334155]'
          : 'bg-gray-100 border-gray-300'
      }`}
    >
      <h2
        className={`mt-4 text-xl sm:text-2xl font-bold ${
          theme === 'dark' ? 'text-[#A5B4FC]' : 'text-indigo-500'
        }`}
      >
        API Pricing
      </h2>
      <p
        className={`text-sm sm:text-base ${
          theme === 'dark' ? 'text-[#E2E8F0]' : 'text-gray-800'
        }`}
      >
        Our API pricing is based on the model used and the number of tokens
        processed. Here's a breakdown of the costs:
      </p>

      <div className="mt-6 overflow-x-auto rounded-xl">
        <table
          className={`w-full text-left rounded-lg border ${
            theme === 'dark'
              ? 'bg-[#1E293B] border-[#334155]'
              : 'bg-gray-50 border-gray-300'
          }`}
        >
          <thead
            className={`${theme === 'dark' ? 'bg-[#6366F1]' : 'bg-indigo-500'}`}
          >
            <tr>
              <th
                className={`p-4 text-xs sm:text-[12.8px] font-semiBold ${
                  theme === 'dark' ? 'text-white' : 'text-white'
                }`}
              >
                API
              </th>
              <th
                className={`p-4 text-xs sm:text-[12.8px] font-semiBold ${
                  theme === 'dark' ? 'text-white' : 'text-white'
                }`}
              >
                MODEL
              </th>
              <th
                className={`p-4 text-xs sm:text-[12.8px] font-semiBold ${
                  theme === 'dark' ? 'text-white' : 'text-white'
                }`}
              >
                PRICE PER 1K TOKENS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className={`border-b ${
                theme === 'dark' ? 'border-[#334155]' : 'border-gray-300'
              }`}
            >
              <td
                className={`p-4 ${
                  theme === 'dark' ? 'text-[#CBD5E1]' : 'text-gray-700'
                }`}
              >
                OpenAI
              </td>
              <td
                className={`p-4 ${
                  theme === 'dark' ? 'text-[#CBD5E1]' : 'text-gray-700'
                }`}
              >
                GPT-3.5
              </td>
              <td
                className={`p-4 ${
                  theme === 'dark' ? 'text-[#CBD5E1]' : 'text-gray-700'
                }`}
              >
                $0.002
              </td>
            </tr>
            <tr
              className={`border-b ${
                theme === 'dark' ? 'border-[#334155]' : 'border-gray-300'
              }`}
            >
              <td
                className={`p-4 ${
                  theme === 'dark' ? 'text-[#CBD5E1]' : 'text-gray-700'
                }`}
              >
                OpenAI
              </td>
              <td
                className={`p-4 ${
                  theme === 'dark' ? 'text-[#CBD5E1]' : 'text-gray-700'
                }`}
              >
                GPT-4
              </td>
              <td
                className={`p-4 ${
                  theme === 'dark' ? 'text-[#CBD5E1]' : 'text-gray-700'
                }`}
              >
                $0.03
              </td>
            </tr>
            <tr
              className={`border-b ${
                theme === 'dark' ? 'border-[#334155]' : 'border-gray-300'
              }`}
            >
              <td
                className={`p-4 ${
                  theme === 'dark' ? 'text-[#CBD5E1]' : 'text-gray-700'
                }`}
              >
                Together AI
              </td>
              <td
                className={`p-4 ${
                  theme === 'dark' ? 'text-[#CBD5E1]' : 'text-gray-700'
                }`}
              >
                Llama-2-70b
              </td>
              <td
                className={`p-4 ${
                  theme === 'dark' ? 'text-[#CBD5E1]' : 'text-gray-700'
                }`}
              >
                $0.0008
              </td>
            </tr>
            <tr>
              <td
                className={`p-4 ${
                  theme === 'dark' ? 'text-[#CBD5E1]' : 'text-gray-700'
                }`}
              >
                Together AI
              </td>
              <td
                className={`p-4 ${
                  theme === 'dark' ? 'text-[#CBD5E1]' : 'text-gray-700'
                }`}
              >
                Llama-2-13b
              </td>
              <td
                className={`p-4 ${
                  theme === 'dark' ? 'text-[#CBD5E1]' : 'text-gray-700'
                }`}
              >
                $0.0006
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <article className="mt-8">
        <h3
          className={`text-lg font-bold ${
            theme === 'dark' ? 'text-[#A5B4FC]' : 'text-indigo-500'
          }`}
        >
          Token Estimation
        </h3>
        <p
          className={`text-sm sm:text-base ${
            theme === 'dark' ? 'text-[#E2E8F0]' : 'text-gray-800'
          }`}
        >
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </p>
      </article>


    </section>
    
  );
};
