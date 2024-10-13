function nameInitials(name: string) {
  const words = name.trim().split(/\s+/);

  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();

  const firstInitial = words[0].charAt(0).toUpperCase();
  const lastInitial = words[words.length - 1].charAt(0).toUpperCase();

  return firstInitial + lastInitial;
}

export { nameInitials };