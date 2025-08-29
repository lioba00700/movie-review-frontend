//2025.08.26 API 연결 - 박민서
//2025.08.21 리뷰 목록 아이템
import CustomButton from "@/common/components/CustomButton";
import RatingButton from "./RatingButton";
import type { Review, ReviewCreateState } from "../types";
import { patchReview, putReview } from "../services/reviewAPI";
import { useParams } from "react-router-dom";
import Modal from "@/common/components/Modal";
import { useState } from "react";
import type { ModalProps } from "@/common/types";
import ReviewDetail from "./ReviewDetail";
import ReviewForm from "./ReviewForm";
import { toast } from "react-toastify";

type ReviewItem = Review & {
  handleChange: () => void;
};

const ReviewItem = ({
  name,
  review,
  rating,
  reviewId,
  handleChange,
}: ReviewItem) => {
  const { movieId } = useParams();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  //모달 종류 지정 상태 선언
  const [modalType, setModalType] = useState<
    "reviewDelete" | "reviewDetail" | "reviewEdit"
  >("reviewDelete");

  const handleSubmitDelete = async () => {
    if (!movieId && !reviewId) return;
    setIsOpenModal(false);
    const res = await patchReview(Number(movieId), reviewId as number);
    if (res.pass) {
      toast.success("삭제되었습니다.");
      handleChange();
    } else {
      toast.error("삭제에 실패했습니다.");
    }
  };

  const handleSubmitEdit = async (form: ReviewCreateState) => {
    console.log();
    if (!movieId && !reviewId) return;
    setIsOpenModal(false);
    const res = await putReview(Number(movieId), reviewId as number, form);
    if (res.pass) {
      toast.success("수정되었습니다.");
      handleChange();
    } else {
      toast.error("수정에 실패했습니다.");
    }
  };

  //props 전달값 지정
  const handleModalProps = () => {
    console.log(modalType);
    switch (modalType) {
      case "reviewDelete":
        return {
          title: "리뷰 삭제",
          content: (
            <p className="text-center mb-[30px]">
              해당 작업은 되돌릴 수 없습니다.
            </p>
          ),
          btn1_name: "취소",
          btn1_onclick: () => setIsOpenModal(false),
          btn1_style: "white",
          btn2_name: "삭제",
          btn2_onclick: handleSubmitDelete,
          btn2_style: "red",
          isOpen: isOpenModal,
          onClose: () => setIsOpenModal(false),
          isOneBtn: false,
        };
      case "reviewDetail":
        return {
          title: "리뷰 상세",
          content: (
            <ReviewDetail
              movieId={Number(movieId)}
              reviewId={reviewId as number}
            />
          ),
          btn1_name: "닫기",
          btn1_onclick: () => setIsOpenModal(false),
          btn1_style: "blue",
          isOpen: isOpenModal,
          onClose: () => setIsOpenModal(false),
          isOneBtn: true,
          isNonBtn: true,
        };
      case "reviewEdit":
        return {
          title: "리뷰 수정",
          content: (
            <ReviewForm
              type="edit"
              movieId={Number(movieId)}
              reviewId={reviewId}
              closeModal={() => setIsOpenModal(false)}
              onSubmit={handleSubmitEdit}
            />
          ),
          btn1_name: "수정",
          btn1_onclick: () => setIsOpenModal(false),
          btn1_style: "white",
          isOpen: isOpenModal,
          onClose: () => setIsOpenModal(false),
          isOneBtn: false,
          isNonBtn: true,
        };
    }
  };

  return (
    <>
      <li
        className="border-1 border-gray-300 rounded-xl w-full p-[20px] relative cursor-pointer"
        onClick={e => {
          setIsOpenModal(true);
          setModalType("reviewDetail");
        }}
      >
        <p className="text-xl font-bold">{name}</p>
        <RatingButton rating={rating} disabled={true} />
        <p className="mt-[15px]">{review}</p>
        <div className="absolute top-[20px] flex gap-[5px] right-[20px]">
          <CustomButton
            value="삭제"
            style="bg-red-600 text-white text-sm"
            onClick={() => {
              setIsOpenModal(true);
              setModalType("reviewDelete");
            }}
          />
          <CustomButton
            value="수정"
            style="bg-blue-600 text-white text-sm"
            onClick={() => {
              setIsOpenModal(true);
              setModalType("reviewEdit");
            }}
          />
        </div>
      </li>
      <Modal {...(handleModalProps() as ModalProps)} />
    </>
  );
};

export default ReviewItem;
