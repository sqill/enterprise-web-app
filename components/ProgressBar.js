
export default function ProgressBar({ percentage = 0 }) {
  return(
    <div className="bg-gray-200 rounded h-6" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={percentage}>
      <div className="bg-green rounded h-6 text-center text-white text-sm transition" style={{ width: `${percentage}%`, transition: 'width 500ms' }}>{percentage}%</div>
    </div>
  )
}
