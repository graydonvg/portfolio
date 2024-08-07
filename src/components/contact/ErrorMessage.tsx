import { FieldErrors, FieldValues } from "react-hook-form";

type Props = {
  errors: FieldErrors<FieldValues>;
  field: string;
};

export default function ErrorMessage({ errors, field }: Props) {
  return (
    <>
      {errors?.[field] && (
        <span className="inline-block self-start text-red-500">
          {errors?.[field]?.message?.toString()}
        </span>
      )}
    </>
  );
}
