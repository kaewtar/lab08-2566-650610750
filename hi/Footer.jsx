export const Task = (props) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        copyright © {props.year} {props.fullName} {props.studentld}
      </p>
    </div>
  );
};
