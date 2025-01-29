@echo off
if "%1"=="" (
    echo Component name required!
    exit /b
)
mkdir src\components\%1
cd src\components\%1
type nul > %1.tsx
type nul > %1.scss
type nul > %1.test.tsx
echo Component %1 created successfully!
