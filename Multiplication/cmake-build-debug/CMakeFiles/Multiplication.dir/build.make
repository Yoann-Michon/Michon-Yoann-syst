# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.15

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files\JetBrains\CLion 2019.3.4\bin\cmake\win\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files\JetBrains\CLion 2019.3.4\bin\cmake\win\bin\cmake.exe" -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = C:\Users\yoann\Desktop\C\rac_syst\Michon-Yoann-syst\Multiplication

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = C:\Users\yoann\Desktop\C\rac_syst\Michon-Yoann-syst\Multiplication\cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/Multiplication.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/Multiplication.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/Multiplication.dir/flags.make

CMakeFiles/Multiplication.dir/multiplication.c.obj: CMakeFiles/Multiplication.dir/flags.make
CMakeFiles/Multiplication.dir/multiplication.c.obj: ../multiplication.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=C:\Users\yoann\Desktop\C\rac_syst\Michon-Yoann-syst\Multiplication\cmake-build-debug\CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object CMakeFiles/Multiplication.dir/multiplication.c.obj"
	C:\SysGCC\mingw64\bin\gcc.exe $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles\Multiplication.dir\multiplication.c.obj   -c C:\Users\yoann\Desktop\C\rac_syst\Michon-Yoann-syst\Multiplication\multiplication.c

CMakeFiles/Multiplication.dir/multiplication.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/Multiplication.dir/multiplication.c.i"
	C:\SysGCC\mingw64\bin\gcc.exe $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E C:\Users\yoann\Desktop\C\rac_syst\Michon-Yoann-syst\Multiplication\multiplication.c > CMakeFiles\Multiplication.dir\multiplication.c.i

CMakeFiles/Multiplication.dir/multiplication.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/Multiplication.dir/multiplication.c.s"
	C:\SysGCC\mingw64\bin\gcc.exe $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S C:\Users\yoann\Desktop\C\rac_syst\Michon-Yoann-syst\Multiplication\multiplication.c -o CMakeFiles\Multiplication.dir\multiplication.c.s

# Object files for target Multiplication
Multiplication_OBJECTS = \
"CMakeFiles/Multiplication.dir/multiplication.c.obj"

# External object files for target Multiplication
Multiplication_EXTERNAL_OBJECTS =

Multiplication.exe: CMakeFiles/Multiplication.dir/multiplication.c.obj
Multiplication.exe: CMakeFiles/Multiplication.dir/build.make
Multiplication.exe: CMakeFiles/Multiplication.dir/linklibs.rsp
Multiplication.exe: CMakeFiles/Multiplication.dir/objects1.rsp
Multiplication.exe: CMakeFiles/Multiplication.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=C:\Users\yoann\Desktop\C\rac_syst\Michon-Yoann-syst\Multiplication\cmake-build-debug\CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking C executable Multiplication.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\Multiplication.dir\link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/Multiplication.dir/build: Multiplication.exe

.PHONY : CMakeFiles/Multiplication.dir/build

CMakeFiles/Multiplication.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\Multiplication.dir\cmake_clean.cmake
.PHONY : CMakeFiles/Multiplication.dir/clean

CMakeFiles/Multiplication.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" C:\Users\yoann\Desktop\C\rac_syst\Michon-Yoann-syst\Multiplication C:\Users\yoann\Desktop\C\rac_syst\Michon-Yoann-syst\Multiplication C:\Users\yoann\Desktop\C\rac_syst\Michon-Yoann-syst\Multiplication\cmake-build-debug C:\Users\yoann\Desktop\C\rac_syst\Michon-Yoann-syst\Multiplication\cmake-build-debug C:\Users\yoann\Desktop\C\rac_syst\Michon-Yoann-syst\Multiplication\cmake-build-debug\CMakeFiles\Multiplication.dir\DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/Multiplication.dir/depend

