# academic-cv

Static bilingual academic homepage for GitHub Pages, together with Chinese and English LaTeX resumes.

## Files

- `index.html`: homepage entry.
- `style.css`: visual system and responsive layout.
- `script.js`: English/Chinese switching logic.
- `latex/cv_zh.tex`: Chinese LaTeX resume source.
- `latex/cv_en.tex`: English LaTeX resume source.
- `resume/`: generated PDF resumes.

## Generate PDF resumes

Run the following commands from the repository root:

```bash
latexmk -xelatex -interaction=nonstopmode -output-directory=latex/build-zh -jobname=cv_zh latex/cv_zh.tex
latexmk -xelatex -interaction=nonstopmode -output-directory=latex/build-en -jobname=cv_en latex/cv_en.tex
```

Then copy the generated PDFs to the `resume/` directory with the final filenames:

```bash
cp "latex/build-zh/cv_zh.pdf" "resume/牛群_北京理工大学_nq_eecm@163.com_15601280520.pdf"
cp "latex/build-en/cv_en.pdf" "resume/QunNiu_BeijingInstituteofTechnology_nq_eecm@163.com_15601280520.pdf"
```

## Preview locally

Any static file server is sufficient. For example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deploy to GitHub Pages

1. Create a GitHub repository named `academic-cv`.
2. Push all files in this directory to the repository.
3. In GitHub, open `Settings -> Pages`.
4. Set `Build and deployment` to `Deploy from a branch`.
5. Select the `main` branch and the repository root folder.
6. Save and wait for the Pages URL to be generated.

The expected address format is:

```text
https://<github-username>.github.io/academic-cv/
```

## Migrate to object storage or CDN later

Because the site only uses relative paths and static files, the same directory can be uploaded directly to Qiniu, Alibaba Cloud OSS, or other static hosting/CDN services without changing the code structure.
