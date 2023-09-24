// "use client";

// import { useRecoilValue } from "recoil";
// import { usePrepareContractWrite, useContractWrite } from "wagmi";
// import { swapRouter_abi } from "../../../components/ABI/swapRouter_abi";

// import {
//   pool1,
//   firstInputField,
//   secondInputField,
//   thirdInputField,
// } from "../../../Recoil/atom";

// //need abi & address

// const PoolCreateButton = () => {
//   const viewPool1 = useRecoilValue(pool1);
//   const viewFirstInputField = useRecoilValue(firstInputField);
//   const viewSecondInputField = useRecoilValue(secondInputField);
//   const viewThirdInputField = useRecoilValue(thirdInputField);

//   const { config, error, data } = usePrepareContractWrite({
//     address: "0xactiveAddress",
//     abi: swapRouter_abi,
//     functionName: "exactInputSingle",
//     args: [
//       {
//         viewPool1,
//         viewFirstInputField,
//         viewSecondInputField,
//         viewThirdInputField,
//       },
//     ],
//     value: BigInt(0),
//   });
//   const { write, isLoading } = useContractWrite(config);

//   return (
//     <>
//       {isLoading ? (
//         <button
//           className="btn btn-wide"
//           disabled={true}
//           onClick={() => write?.()}
//         >
//           <span className="loading loading-spinner"></span>
//           Loading...
//         </button>
//       ) : (
//         <button
//           className="btn btn-wide"
//           disabled={!write}
//           onClick={() => write?.()}
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             stroke-width="1.5"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
//             ></path>
//           </svg>
//           Swap
//         </button>
//       )}
//       {error && (
//         <div>
//           An error has occurred prepping the transaction: {error.message}
//         </div>
//       )}
//     </>
//   );
// };

// export default PoolCreateButton;
