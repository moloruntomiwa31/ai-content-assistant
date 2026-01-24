import { Upload } from 'lucide-react';

interface FileUploadProps {
  file: File | null;
  onFileChange: (file: File | null) => void;
  label: string;
  accept?: string;
}

export default function FileUpload({ file, onFileChange, label, accept = "image/*" }: FileUploadProps) {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    onFileChange(selectedFile || null);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="file"
          accept={accept}
          onChange={handleFileUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-2xl p-6 sm:p-8 text-center hover:border-primary-500 transition-colors">
          {file ? (
            <div className="space-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900 rounded-xl mx-auto flex items-center justify-center">
                <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 font-medium text-sm sm:text-base break-all">
                {file.name}
              </p>
              <p className="text-xs sm:text-sm text-neutral-500">Click to change</p>
            </div>
          ) : (
            <>
              <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-neutral-400 mx-auto mb-3 sm:mb-4" />
              <p className="text-neutral-600 dark:text-neutral-400 mb-2 text-sm sm:text-base">
                Drop your file here or click to browse
              </p>
              <p className="text-xs sm:text-sm text-neutral-500">PNG, JPG up to 10MB</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}