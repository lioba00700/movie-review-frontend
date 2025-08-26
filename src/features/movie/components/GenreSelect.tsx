//2025.08.26 영화 장르 선택 체크박스 컴포넌트액션 (Action)
const genres = [
    '액션', 
    '드라마',
    '코미디',
    '로맨스',
    '스릴러',
    '공포',
    '판타지',
    'SF',
    '뮤지컬',
    '애니메이션'
]

const GenreSelect = ({required}:{required?:boolean}) => {
    return (
        <div>
            <label className="font-semibold">
                {required && <span className="mr-[5px] text-red-600">*</span> } 
                장르
            </label>
            <div className="flex flex-wrap mt-[10px] mb-[10px] gap-x-[20px] gap-y-[5px]">
            {
                genres.map((genre)=>(
                    <div className="flex items-center gap-[5px]">
                        <input type="checkbox" value={genre} />
                        <label >{genre}</label>
                    </div>
                ))
            }
            </div>
        </div>

    )
}

export default GenreSelect;